// In-memory data store for homestay listings
let homestays = [
  {
    id: 1,
    name: "Himalayan Cedar Retreat",
    city: "Manali",
    state: "Himachal Pradesh",
    price: 3200,
    rating: 4.9,
    reviews: 87,
    available: true,
    tags: ["Mountain View", "Bonfire", "Meals Included"],
    description:
      "A cozy cedar-wood cottage nestled in the Himalayas with panoramic snow-peak views, home-cooked local meals, and nightly bonfires.",
    host: "Priya Sharma",
    maxGuests: 4,
    createdAt: "2024-01-10T08:00:00.000Z",
  },
  {
    id: 2,
    name: "Backwaters Wooden Villa",
    city: "Alleppey",
    state: "Kerala",
    price: 4500,
    rating: 4.8,
    reviews: 64,
    available: true,
    tags: ["Waterfront", "Boat Ride", "AC"],
    description:
      "A traditional Kerala wooden villa on the backwaters. Wake up to the sound of rippling water and enjoy a private boat ride at sunset.",
    host: "Anitha Nair",
    maxGuests: 6,
    createdAt: "2024-02-15T09:30:00.000Z",
  },
  {
    id: 3,
    name: "Rajput Heritage Haveli",
    city: "Jaisalmer",
    state: "Rajasthan",
    price: 5800,
    rating: 4.7,
    reviews: 52,
    available: false,
    tags: ["Heritage", "Desert Safari", "Pool"],
    description:
      "An 18th-century Rajput haveli with hand-painted frescoes, a sandstone courtyard pool, and guided desert camel safaris.",
    host: "Vikram Singh",
    maxGuests: 8,
    createdAt: "2024-01-20T10:00:00.000Z",
  },
  {
    id: 4,
    name: "Coorg Coffee Estate",
    city: "Madikeri",
    state: "Karnataka",
    price: 2900,
    rating: 4.6,
    reviews: 39,
    available: true,
    tags: ["Coffee Tours", "Nature Walks", "WiFi"],
    description:
      "Stay amidst fragrant coffee plantations in the Scotland of India. Daily coffee-picking tours, guided jungle treks, and fresh estate-grown brews.",
    host: "Suresh Gowda",
    maxGuests: 4,
    createdAt: "2024-03-05T07:00:00.000Z",
  },
  {
    id: 5,
    name: "Rann of Kutch Tent Stay",
    city: "Bhuj",
    state: "Gujarat",
    price: 2100,
    rating: 4.5,
    reviews: 28,
    available: true,
    tags: ["Stargazing", "Cultural Show", "Breakfast"],
    description:
      "Sleep under a blanket of stars in a luxury canvas tent on the white salt desert. Includes folk performances, camel rides, and a full Gujarati breakfast.",
    host: "Mehul Patel",
    maxGuests: 2,
    createdAt: "2024-02-28T06:00:00.000Z",
  },
  {
    id: 6,
    name: "Andaman Beach Cottage",
    city: "Havelock Island",
    state: "Andaman & Nicobar",
    price: 6200,
    rating: 4.9,
    reviews: 103,
    available: true,
    tags: ["Beachfront", "Snorkelling", "Kitchen"],
    description:
      "A private beach cottage steps from Radhanagar Beach. Includes snorkelling gear, a fully equipped kitchen, and direct beach access 24/7.",
    host: "Deepa Krishnan",
    maxGuests: 5,
    createdAt: "2023-12-01T08:00:00.000Z",
  },
];

module.exports = {
  getAll: () => homestays,
  getById: (id) => homestays.find((h) => h.id === Number(id)),
  create: (data) => {
    const newHomestay = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...data,
    };
    homestays.push(newHomestay);
    return newHomestay;
  },
  update: (id, data) => {
    const index = homestays.findIndex((h) => h.id === Number(id));
    if (index === -1) return null;
    homestays[index] = { ...homestays[index], ...data, id: Number(id) };
    return homestays[index];
  },
  remove: (id) => {
    const index = homestays.findIndex((h) => h.id === Number(id));
    if (index === -1) return false;
    homestays.splice(index, 1);
    return true;
  },
  search: (query) => {
    const q = query.toLowerCase();
    return homestays.filter(
      (h) =>
        h.name.toLowerCase().includes(q) ||
        h.city.toLowerCase().includes(q) ||
        h.state.toLowerCase().includes(q) ||
        h.tags.some((t) => t.toLowerCase().includes(q))
    );
  },
  filterByCity: (city) =>
    homestays.filter((h) => h.city.toLowerCase() === city.toLowerCase()),
  getStats: () => {
    const withRating = homestays.filter((h) => typeof h.rating === "number");
    const avgRating =
      withRating.length > 0
        ? parseFloat(
            (
              withRating.reduce((sum, h) => sum + h.rating, 0) /
              withRating.length
            ).toFixed(2)
          )
        : null;
    const avgPrice =
      homestays.length > 0
        ? Math.round(
            homestays.reduce((sum, h) => sum + (h.price || 0), 0) /
              homestays.length
          )
        : 0;
    return {
      total: homestays.length,
      available: homestays.filter((h) => h.available).length,
      unavailable: homestays.filter((h) => !h.available).length,
      avgPrice,
      avgRating,
      cities: [...new Set(homestays.map((h) => h.city))],
    };
  },
};
