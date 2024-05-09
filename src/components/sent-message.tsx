"use client"

import React from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

interface SentMessageProps {
  message: string;
  timestamp: string;
  avatarSrc: string;
  avatarFallback: string;
}

export function SentMessage({ message, timestamp, avatarSrc, avatarFallback }: SentMessageProps) {
    return (
      <div className="flex items-start space-x-4 justify-end">
        <div className="flex-1 space-y-2">
          <div className="rounded-lg bg-primary text-primary-foreground p-4">
            <p>{message}</p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">{timestamp}</p>
        </div>
        <Avatar>
          <AvatarImage alt="Avatar" src={avatarSrc} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </div>
    )
}