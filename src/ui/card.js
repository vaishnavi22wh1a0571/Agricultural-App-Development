
import React from 'react';

export const Card = ({ children, className, ...props }) => (
  <div className={`bg-white shadow-md rounded-lg p-6 ${className}`} {...props}>{children}</div>
);

export const CardHeader = ({ children, className, ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>{children}</div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h2 className={`text-xl font-semibold ${className}`} {...props}>{children}</h2>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={className} {...props}>{children}</div>
);