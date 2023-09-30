"use client"
import React from "react";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

export default function LastSeen({ date }: { date: string }) {
  const dateObj = new Date(date);
  return <ReactTimeAgo date={dateObj} />;
}
