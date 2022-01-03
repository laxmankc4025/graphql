import Icons from "../components/Icons";
import styled from "@emotion/styled";
import Blog from "../components/Blog";


import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// const apiKey = process.env.NEXT_API_KEY;
const apiKey = "ckxslxy431zsy01z9cdvgetpt";

const client = new ApolloClient({
  uri: "https://api-ap-south-1.graphcms.com/v2/" + apiKey + "/master",
  cache: new InMemoryCache(),
});

const Post = styled.div`
  padding: 3rem;
  margin-bottom: 4rem;
  margin: 30px;
`;

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Post>
        <div>
          <Blog />
        </div>
      </Post>
    </ApolloProvider>
  );
}

// render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root'),
// );
