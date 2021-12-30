const header = [
  {
    id: 1,
    name: "Get Reviews",
    path: "/features/get-reviews",
    connects: [
      { to: "/", title: " Service Reviews" },
      { to: "/", title: "Product Reviews" },
      { to: "/", title: "Location Reviews" },
      { to: "/", title: "Review Invitations" },
    ],
  },
  {
    id: 2,
    name: "Manage Reviews",
    path: "/features/manage-reviews",
    connects: [
      { to: "/", title: "Join the community" },
      { to: "/", title: "Leave a review" },
      { to: "/", title: "Search for a company" },
    ],
  },
  {
    id: 3,
    name: "Showcase Reviews",
    path: "/features/showcase-reviews",
    connects: [
      { to: "/", title: "Review SEO" },
      { to: "/", title: "TrustBox Widgets" },
      { to: "/", title: "Social Media Tool}s" },
      { to: "/", title: "Marketing Assets" },
    ],
  },
  {
    id: 4,
    name: "Analyze Reviews",
    path: "/features/analyze-reviews",
    connects: [
      { to: "/", title: " Review Insights" },
      { to: "/", title: "Dashboard and Analytic}s" },
      { to: "/", title: "Review Tagging" },
    ],
  },
];

export default header;
