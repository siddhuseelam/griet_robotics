import React from 'react';
import { Link } from 'react-router-dom';

export function Button({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  asChild = false,
  to,
  href,
  onClick,
  ...props 
}) {
  const baseClasses = 'btn';
  const variantClasses = {
    default: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    link: 'btn-link'
  };
  
  const sizeClasses = {
    sm: 'btn-sm',
    default: '',
    lg: 'btn-lg',
    icon: 'btn-icon'
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  // If a router 'to' prop is provided, render as React Router Link
  if (to) {
    return (
      <Link to={to} className={combinedClassName} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  // If an external 'href' prop is provided, render as an anchor tag
  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  // Render standard button
  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
