import React from "react";
import Hero from "@components/Guest/Hero";
import Info from "@components/Guest/Info";
import Testimonials from "@components/Guest/Testimonials";
import Screen from "@components/Screen";

export default function Root({ history }) {
  return (
    <Screen class="guestScreen" root={true} history={history}>
      <Hero />
      <Info />
      <Testimonials />
    </Screen>
  );
}
