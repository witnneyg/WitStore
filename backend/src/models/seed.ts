import mongoose from "mongoose";
import { Category } from "./categorySchema.js";
import { Product } from "./productSchema.js";

export async function seed() {
  try {
    const mousesCategory = new Category({
      name: "Mouses",
      slug: "mouses",
      imageUrl:
        "https://utfs.io/f/857ace02-31c2-43ae-a6f3-7d97b0cb279a-e7tkok.png",
    });
    await mousesCategory.save();

    const keyboardsCategory = new Category({
      name: "Teclados",
      slug: "teclados",
      imageUrl:
        "https://utfs.io/f/f9f5bf3e-ebdd-49ea-b983-92f930f9afab-7zu99x.png",
    });
    await keyboardsCategory.save();

    const headphonesCategory = new Category({
      name: "Fones",
      slug: "headphones",
      imageUrl: "https://witstore.s3.sa-east-1.amazonaws.com/headphones.png",
    });
    await headphonesCategory.save();

    const mousepadsCategory = new Category({
      name: "Mousepads",
      slug: "mousepads",
      imageUrl: "https://witstore.s3.sa-east-1.amazonaws.com/mousepads.png",
    });
    await mousepadsCategory.save();

    const monitorsCategory = new Category({
      name: "Monitores",
      slug: "monitors",
      imageUrl: "https://witstore.s3.sa-east-1.amazonaws.com/monitors.png",
    });
    await monitorsCategory.save();

    const speakersCategory = new Category({
      name: "Speakers",
      slug: "speakers",
      imageUrl: "https://witstore.s3.sa-east-1.amazonaws.com/speakers.png",
    });
    await speakersCategory.save();

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory._id,
        discountPercentage: 10,
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-superlight.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-superlight.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-superlight.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-superlight.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory._id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory._id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_hyperx-dart.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_hyperx-dart.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_hyperx-dart.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_hyperx-dart.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory._id,
        discountPercentage: 10,
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_razer-deathadder.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_razer-deathadder.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_razer-deathadder.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_razer-deathadder.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory._id,
        discountPercentage: 0,
      },
    ];

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-mini.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-mini.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-mini.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-mini.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory._id,
        discountPercentage: 10,
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-s.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-s.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-s.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory._id,
        discountPercentage: 10,
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-pop-keys.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-pop-keys.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-pop-keys.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-pop-keys.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory._id,
        discountPercentage: 5,
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-mx-mechanical.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-mx-mechanical.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-mx-mechanical.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-mx-mechanical.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory._id,
        discountPercentage: 15,
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory._id,
        discountPercentage: 5,
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_redragon-gamer-ashe.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_redragon-gamer-ashe.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_redragon-gamer-ashe.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_redragon-gamer-ashe.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory._id,
        discountPercentage: 25,
      },
    ];

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-vibe.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-vibe.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-vibe.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-vibe.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory._id,
        discountPercentage: 10,
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory._id,
        discountPercentage: 5,
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory._id,
        discountPercentage: 15,
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-earbuds.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-earbuds.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-earbuds.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-earbuds.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory._id,
        discountPercentage: 5,
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_hyperx-stinger.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_hyperx-stinger.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_hyperx-stinger.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_hyperx-stinger.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory._id,
        discountPercentage: 0,
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_razer-kraken.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_razer-kraken.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_razer-kraken.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_razer-kraken.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory._id,
        discountPercentage: 0,
      },
    ];

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-powerplay.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-powerplay.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-powerplay.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-powerplay.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory._id,
        discountPercentage: 10,
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-desk-mat.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-desk-mat.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-desk-mat.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-desk-mat.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory._id,
        discountPercentage: 0,
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-g740.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-g740.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-g740.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-g740.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory._id,
        discountPercentage: 5,
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-studio-series.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-studio-series.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-studio-series.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-studio-series.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory._id,
        discountPercentage: 15,
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_force-dark.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_force-dark.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_force-dark.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_force-dark.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory._id,
        discountPercentage: 10,
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_force-snow.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_force-snow.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_force-snow.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_force-snow.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory._id,
        discountPercentage: 5,
      },
    ];

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory._id,
        discountPercentage: 15,
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory._id,
        discountPercentage: 5,
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_dell-P2723QE.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_dell-P2723QE.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_dell-P2723QE.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_dell-P2723QE.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory._id,
        discountPercentage: 0,
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_dell-S3422DWG.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_dell-S3422DWG.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_dell-S3422DWG.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_dell-S3422DWG.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory._id,
        discountPercentage: 0,
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory._id,
        discountPercentage: 0,
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_dell-AW2524HF.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_dell-AW2524HF.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_dell-AW2524HF.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_dell-AW2524HF.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory._id,
        discountPercentage: 10,
      },
    ];

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory._id,
        discountPercentage: 5,
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_logi-dock.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_logi-dock.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_logi-dock.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_logi-dock.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory._id,
        discountPercentage: 15,
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory._id,
        discountPercentage: 10,
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory._id,
        discountPercentage: 0,
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_sony-XB23.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_sony-XB23.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_sony-XB23.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_sony-XB23.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory._id,
        discountPercentage: 0,
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://witstore.s3.sa-east-1.amazonaws.com/01_sony-S200F.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/02_sony-S200F.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/03_sony-S200F.png",
          "https://witstore.s3.sa-east-1.amazonaws.com/04_sony-S200F.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory._id,
        discountPercentage: 0,
      },
    ];

    const savedMouses = await Product.insertMany(mouses);
    mousesCategory.products = savedMouses.map((mouse) => mouse._id);
    await mousesCategory.save();

    const savedKeyBoards = await Product.insertMany(keyboards);
    keyboardsCategory.products = savedKeyBoards.map(
      (keyboards) => keyboards._id,
    );
    await keyboardsCategory.save();

    // Inserir e associar produtos às categorias
    const savedHeadphones = await Product.insertMany(headphones);
    headphonesCategory.products = savedHeadphones.map(
      (headphone) => headphone._id,
    );
    await headphonesCategory.save();

    const savedMousepads = await Product.insertMany(mousepads);
    mousepadsCategory.products = savedMousepads.map((mousepad) => mousepad._id);
    await mousepadsCategory.save();

    const savedMonitors = await Product.insertMany(monitors);
    monitorsCategory.products = savedMonitors.map((monitor) => monitor._id);
    await monitorsCategory.save();

    const savedSpeakers = await Product.insertMany(speakers);
    speakersCategory.products = savedSpeakers.map((speaker) => speaker._id);
    await speakersCategory.save();

    console.log(savedSpeakers);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
}

await seed();
