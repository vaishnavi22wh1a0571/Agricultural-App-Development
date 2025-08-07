import React from 'react';

export const Tabs = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const TabsList = ({ children, ...props }) => (
  <div className="flex border-b" {...props}>{children}</div>
);

export const TabsTrigger = ({ children, value, ...props }) => (
  <button className="px-4 py-2 font-semibold text-gray-600 hover:text-gray-800" {...props}>{children}</button>
);

export const TabsContent = ({ children, value, ...props }) => (
  <div {...props}>{children}</div>
);