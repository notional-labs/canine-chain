package keeper_test

import (
	sdkTypes "github.com/cosmos/cosmos-sdk/types"
	"github.com/jackalLabs/canine-chain/x/filetree/types"
)

func (suite *KeeperTestSuite) TestMsgMakeRoot() {
	suite.SetupSuite()
	msgSrvr, _, context := setupMsgServer(suite)

	alice, err := sdkTypes.AccAddressFromBech32("cosmos1ytwr7x4av05ek0tf8z9s4zmvr6w569zsm27dpg")
	suite.Require().NoError(err)

	msg, err := types.CreateMsgMakeRoot(alice.String())
	suite.Require().NoError(err)

	cases := []struct {
		preRun    func() *types.MsgMakeRoot
		expErr    bool
		expErrMsg string
		name      string
	}{
		{
			preRun: func() *types.MsgMakeRoot {
				return msg
			},
			expErr: false,
			name:   "make root success",
		},
	}

	for _, tc := range cases {
		suite.Run(tc.name, func() {
			msg := tc.preRun()
			suite.Require().NoError(err)
			res, err := msgSrvr.MakeRoot(context, msg)
			if tc.expErr {
				suite.Require().Error(err)
				suite.Require().Contains(err.Error(), tc.expErrMsg)
			} else {
				suite.Require().NoError(err)
				suite.Require().EqualValues(types.MsgMakeRootResponse{}, *res)

			}
		})
	}
}
