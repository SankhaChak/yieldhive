"use client";

import { AlchemySignerStatus } from "@alchemy/aa-alchemy";
import { useAuthenticate, useSignerStatus } from "@alchemy/aa-alchemy/react";
import { Button } from "@yieldhive/ui/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@yieldhive/ui/components/ui/dialog";
import { Input } from "@yieldhive/ui/components/ui/input";
import { Label } from "@yieldhive/ui/components/ui/label";
import { cn } from "@yieldhive/ui/lib/utils";
import { useState } from "react";

const EmbeddedAccountsAuthModal = () => {
  const [email, setEmail] = useState("");

  const { authenticate } = useAuthenticate();
  const { status } = useSignerStatus();

  const isAwaitingEmail = status === AlchemySignerStatus.AWAITING_EMAIL_AUTH;

  const login = () => {
    authenticate({ type: "email", email });
  };

  return (
    <DialogContent className="!top-1/2 !-translate-y-1/2 !left-1/2 !-translate-x-1/2 !max-w-lg !mx-auto !rounded-lg">
      <DialogHeader className="space-y-3">
        <DialogTitle>Sign In Using Email</DialogTitle>
        <DialogDescription>
          Sign in to your account using your email address. Powered by Alchemy
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4 pt-3 pb-2">
        <Label htmlFor="channelName" className="block">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {isAwaitingEmail && <p>Please check your email!</p>}
      </div>
      <DialogFooter className={cn("gap-2")}>
        <Button onClick={login} type="submit" className="w-full">
          Sign In
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default EmbeddedAccountsAuthModal;
