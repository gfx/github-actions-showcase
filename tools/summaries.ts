#!/usr/bin/env npx ts-node
import { summary } from "@actions/core";

summary
  .addHeading("Hello, world! 🚀")
  .addRaw(`This is a job summary that runs on ${process.platform}-${process.arch}`)
  .addEOL()
  .write()
  .then(() => {
    console.log("Summary written.");
  })
  .catch((err) => {
    console.error("Failed to output a job summary!", err);
  });
