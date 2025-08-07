import React from 'react';
import { AlertCircle, Leaf, Droplets, Bug, Sun, Wind } from 'lucide-react';

const AlertItem = ({ alert }) => {
  const renderAlertIcon = (type) => {
    switch (type) {
      case 'pest': return <Bug className="h-5 w-5 text-yellow-500" />;
      case 'weather': return <Wind className="h-5 w-5 text-blue-500" />;
      case 'soil': return <Leaf className="h-5 w-5 text-green-500" />;
      default: return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <li className="flex items-start">
      {renderAlertIcon(alert.type)}
      <span className="ml-2">{alert.message}</span>
    </li>
  );
};

export default AlertItem;
