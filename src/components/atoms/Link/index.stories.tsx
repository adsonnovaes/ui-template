import React from 'react';
import { Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Link from './index';

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta;

export const InternalLink = () => (
  <Router>
    <Link link="/internal">Internal Link</Link>
  </Router>
);

export const ExternalLink = () => (
  <Link link="https://www.example.com" external>
    External Link
  </Link>
);
