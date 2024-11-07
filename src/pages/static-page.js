// /pages/ssr-page.js

// Fetch data on each request
export async function getServerSideProps() {
    // Static data (can be replaced with an API call)
    const data = {
      title: "SSR Data Example",
      description: "This page is using server-side rendered data, fetched on every request.",
      items: [
        { id: 1, name: "Item 1", description: "This is item 1" },
        { id: 2, name: "Item 2", description: "This is item 2" },
        { id: 3, name: "Item 3", description: "This is item 3" },
      ],
    };
  
    // Return the data as props to the page
    return {
      props: { data }, // This will pass the `data` to the page component
    };
  }
  
  export default function SSRPage({ data }) {
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <ul>
          {data.items.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  