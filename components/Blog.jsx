import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      descriptions
    }
  }
`;

export default function Blog(posts) {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { posts },
    pollInterval: 100,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.map(({ id, title, descriptions }) => (
    <div>
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 1000, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div key={posts.id}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <Link href="#">{title}</Link>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    {descriptions}
                  </Typography>
                </div>
              </Grid>
              <Grid item>
                <Stack spacing={2} direction="row">
                  <Button variant="outlined" color="error">
                    <Link href="#">Continue Reading</Link>
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  ));
}
