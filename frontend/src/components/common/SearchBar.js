import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div style={{ position: 'relative', width: '300px' }}>
            <span style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none'
            }}>
                <svg 
                    viewBox="0 0 24 24" 
                    stroke="#6c757d" 
                    fill="none" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    style={{ width: '16px', height: '16px' }}
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </span>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => onSearch(e.target.value)}
                style={{
                    width: '100%',
                    height: '38px',
                    padding: '0 14px 0 38px',
                    border: '1px solid transparent',
                    borderRadius: '8px',
                    backgroundColor: '#f1f3f5',
                    color: '#212529',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    outline: 'none'
                }}
                onFocus={(e) => {
                    e.target.style.backgroundColor = '#ffffff';
                    e.target.style.borderColor = '#3a8dff';
                    e.target.style.boxShadow = '0 0 0 3px rgba(58, 141, 255, 0.15)';
                }}
                onBlur={(e) => {
                    e.target.style.backgroundColor = '#f1f3f5';
                    e.target.style.borderColor = 'transparent';
                    e.target.style.boxShadow = 'none';
                }}
            />
        </div>
    );
};

export default SearchBar;
