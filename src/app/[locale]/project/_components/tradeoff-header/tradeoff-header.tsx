"use client"

import { Fragment } from "react/jsx-runtime";

export default function TradeOffHeader({ items }: { items: string[] }) {
  return (<span className="flex flex-col">{items.map((item, i) => <Fragment key={item + i}><span>{item}</span> {i < items.length - 1 ? <i className="text-(--color-text-brand-strong)">vs</i> : ""}</Fragment>)}</span>);
}
