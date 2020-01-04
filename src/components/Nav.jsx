import React from 'react';
import { Link } from "wouter";

const navigationLinks = [{ name: 'Counter Test', slug: '/'}, { name: 'Example', slug: '/example' }]

export const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        {navigationLinks.map((navigationLink, index) => {
          return <li key={index}><Link to={navigationLink.slug}>{navigationLink.name}</Link></li>
        })}
      </ul>
    </nav>
  )
}
