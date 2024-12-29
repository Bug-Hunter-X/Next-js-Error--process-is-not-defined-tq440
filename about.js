```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will cause an error because 'process' is not defined in the browser environment
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. Is production: {isProduction.toString()}</p>
    </div>
  );
}

export default About;
```