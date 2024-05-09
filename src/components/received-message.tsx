"use client"

import React from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

interface ReceivedMessageProps {
  message: string;
  timestamp: string;
  avatarSrc: string;
  avatarFallback: string;
}

export function ReceivedMessage({ message, timestamp, avatarSrc, avatarFallback }: ReceivedMessageProps) {
    return (
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage alt="Avatar" src={avatarSrc} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            <p>{message}</p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">{timestamp}</p>
        </div>
      </div>
    )
}