package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jackalLabs/canine-chain/x/filetree/types"
)

func (k msgServer) ChangeOwner(goCtx context.Context, msg *types.MsgChangeOwner) (*types.MsgChangeOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentOwner := MakeOwnerAddress(msg.Address, msg.FileOwner)

	file, found := k.GetFiles(ctx, msg.Address, currentOwner)
	if !found {
		return nil, types.ErrFileNotFound
	}

	// Only the owner of a file can give it away
	isOwner := IsOwner(file, msg.Creator)
	if !isOwner {
		return nil, types.ErrCantGiveAway
	}

	newOwner := MakeOwnerAddress(msg.Address, msg.NewOwner)

	// If the new owner already has a file set with this path,do not change
	// ownership--else their file will be overwridden
	_, fnd := k.GetFiles(ctx, msg.Address, newOwner)
	if fnd {
		return nil, types.ErrAlreadyExists
	}

	file.Owner = newOwner

	k.SetFiles(ctx, file)
	// Delete old file
	k.RemoveFiles(ctx, msg.Address, currentOwner)

	return &types.MsgChangeOwnerResponse{}, nil
}
