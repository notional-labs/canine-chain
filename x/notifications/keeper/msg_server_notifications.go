package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/jackal-dao/canine/x/notifications/types"
)

func (k msgServer) CreateNotifications(goCtx context.Context, msg *types.MsgCreateNotifications) (*types.MsgCreateNotificationsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Find the notiCounter
	notiCounter, found := k.GetNotiCounter(
		ctx,
		msg.Address,
	)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Recipients notiCounter not set")
	}

	// Check if the value already exists
	_, isFound := k.GetNotifications(
		ctx,
		notiCounter.Counter,
		msg.Address,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var notifications = types.Notifications{
		Creator:      msg.Creator,
		Count:        notiCounter.Counter,
		Notification: msg.Notification,
		Address:      msg.Address,
	}

	k.SetNotifications(
		ctx,
		notifications,
	)

	notiCounter.Counter += 1
	k.SetNotiCounter(
		ctx,
		notiCounter,
	)

	return &types.MsgCreateNotificationsResponse{}, nil
}

func (k msgServer) UpdateNotifications(goCtx context.Context, msg *types.MsgUpdateNotifications) (*types.MsgUpdateNotificationsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetNotifications(
		ctx,
		msg.Count,
		msg.Address,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var notifications = types.Notifications{
		Creator:      msg.Creator,
		Count:        msg.Count,
		Notification: msg.Notification,
		Address:      msg.Address,
	}

	k.SetNotifications(ctx, notifications)

	return &types.MsgUpdateNotificationsResponse{}, nil
}

func (k msgServer) DeleteNotifications(goCtx context.Context, msg *types.MsgDeleteNotifications) (*types.MsgDeleteNotificationsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetNotifications(
		ctx,
		msg.Count,
		msg.Creator, //this needs to be fleshed out with permissions checking
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveNotifications(
		ctx,
		msg.Count,
		msg.Creator, //this needs to be fleshed out with permissions checking
	)

	return &types.MsgDeleteNotificationsResponse{}, nil
}
