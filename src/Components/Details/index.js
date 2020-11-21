import React from "react";
import { Box, Button, Card, Text, Flex } from "rebass";

function Details({ details, goBack }) {
  const attr = [
    { name: "Icon", prop: "icon", type: "img", class: "img" },
    { name: "Name", prop: "name", type: "text", class: "name" },
    {
      name: "Address",
      prop: "formatted_address",
      type: "text",
      class: "address",
    },
    { name: "Rating", prop: "rating", type: "text", class: "rating" },
    { name: "Types", prop: "types", type: "arr", class: "types" },
  ];
  return (
    <Card className='card'>
      <Box>
      <h2>Details</h2>
        {attr.map((d, i) => (
          <Flex key={i} my={2} alignItems='center'>
            {d.type !== "img" && (
              <Text fontWeight='bold'>{d.name} : &nbsp;</Text>
            )}
            {d.type !== "img" && (
              <Text className={d.class}>
                {d.type === "arr"
                  ? details[d.prop].join(" | ")
                  : details[d.prop]}
              </Text>
            )}
            {d.type === "img" && (
              <img src={details[d.prop]} alt='noIcon' height={50} className={d.class} />
            )}
          </Flex>
        ))}
      </Box>
      <Button className='button' onClick={() => goBack()} mt={5}>
        Go back
      </Button>
    </Card>
  );
}

export default Details;
