'use client';

import React, { useState } from 'react';
import { NoteItemProps } from "@/app/components/interfaces";

export default function NoteItem({ title, description, information }: NoteItemProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <li className="note-item-container">
      <div className="note-item-content">
        <strong>{title}:</strong> {description}
        {information && 
          <div 
            className="info-icon-container"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <svg 
              className="info-icon" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            {showTooltip && (
              <div className="info-tooltip">
                {information}
              </div>
            )}
          </div>
        }
      </div>
    </li>
  );
}