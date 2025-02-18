// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";

import {
  PlasmicWebsiteRedesign,
  Head
} from "../components/plasmic/beginners_guide_website_in_3_minutes/PlasmicWebsiteRedesign";
import type { PageProps } from "gatsby";
export { Head };

function WebsiteRedesign({ location, path, params }: PageProps) {
  // Use PlasmicWebsiteRedesign to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicWebsiteRedesign are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicWebsiteRedesign is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Gatsby "wrapRootElement" function
  // (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#wrapRootElement).
  return (
    <PageParamsProvider__
      route={path}
      params={params}
      query={Object.fromEntries(new URLSearchParams(location.search))}
    >
      <PlasmicWebsiteRedesign />
    </PageParamsProvider__>
  );
}

export default WebsiteRedesign;
