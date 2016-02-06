package com.libqa.web.service.feed.actor;

import com.libqa.application.enums.ActionType;
import com.libqa.application.enums.PostType;
import com.libqa.web.domain.User;

public class FeedClaim extends FeedActionActor {
    private FeedClaim(Integer feedId, User actionUser) {
        super(feedId, actionUser);
    }

    public static FeedClaim of(Integer feedId, User actionUser) {
        return new FeedClaim(feedId, actionUser);
    }

    @Override
    public PostType getPostType() {
        return PostType.THREAD;
    }

    @Override
    public ActionType getActionType() {
        return ActionType.CLAIM;
    }
}
