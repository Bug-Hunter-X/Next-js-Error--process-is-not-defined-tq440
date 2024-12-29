```javascript
// pages/about.js
function About({ isProduction }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. Is production: {isProduction.toString()}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      isProduction: process.env.NODE_ENV === 'production',
    },
  };
}
export default About;
```