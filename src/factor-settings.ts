import { Component } from "vue"

export default {
    headTags: {
        font: `<link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet" />`
    },
    metatags: {
        defaultTitle: "Alpha",
        titleTemplate: "%s - Factor JS"
    },
    site: {
        components: {
            header: (): Promise<Component> => import("./header.vue"),
            footer: (): Promise<Component> => import("./footer.vue")
        },
        logo: (): Promise<Component> => import("./el/logo.vue"),
        /**
         * Site navigation.
         */
        nav: [
            {
                _item: "intro",
                path: "/",
                name: "Intro"
            },
            {
                _item: "about",
                path: "/about",
                name: "Om Oss"
            },
            {
                _item: "work",
                path: "/work",
                name: "Portfölj"
            },
            {
                _item: "blog",
                path: "/blog",
                name: "Blogg"
            },
            {
                _item: "contact",
                path: "/contact",
                name: "Kontakt"
            }
        ],
        /**
         * Site social links.
         */
        social: [
            {
                _item: "dribbble",
                path: "https://dribbble.com/raylopezaleman",
                icon: "fab fa-dribbble"
            },
            {
                _item: "behance",
                path: "https://behance.com/",
                icon: "fab fa-behance"
            },
            {
                _item: "instagram",
                path: "https://www.instagram.com/raylopezaleman/",
                icon: "fab fa-instagram"
            },
            {
                _item: "twitter",
                path: "https://twitter.com/raylopezaleman",
                icon: "fab fa-twitter"
            },
            {
                _item: "linkedin",
                path: "https://www.linkedin.com/in/raylopezaleman/",
                icon: "fab fa-linkedin"
            }
        ],
        /**
         * Copy for the call to action on the home page, work page, and about page.
         */
        cta: {
            headline: "Låt oss skapa något enastående",
            path: "/contact",
            text: "Hör av sig"
        }
    },
    /**
     * Site footer settings.
     */
    footer: {
        legal: `&copy; ${new Date().getFullYear()} <a href="https://www.fiction.com/" target="_blank">Fiction.com</a> Inc.`,
        nav: [
            {
                _item: "terms",
                path: "https://www.fiction.com/terms-of-service",
                text: "Terms of Service"
            },
            {
                _item: "dashboard",
                path: "/dashboard",
                text: "Dashboard"
            }
        ]
    },
    /**
     * Copy for the home page template.
     */
    home: {
        component: (): Promise<Component> => import("./home/v-home.vue"),
        intro: {
            component: (): Promise<Component> => import("./home/intro.vue"),
            pretitle: "byggande framtiden",
            title: "Bygger för byggare. <br>Kom och se själv.",
            content:
                "Konstruktion är en konst. Vi är konstnärerna. Vad mer att önska??",
            buttons: [
                {
                    _item: "contact",
                    link: "/contact",
                    text: `Starta ett projekt <i class="fas fa-arrow-right"></i>`,
                    classes: "btn rounded-full bg-blue-500 text-white hover:bg-blue-700 hover:text-white"
                },
                {
                    _item: "work",
                    link: "/work",
                    text: "\n" +
                        "Se vår portfölj",
                    classes:
                        "btn rounded-full border border-solid border-white text-white hover:bg-white hover:text-blue-500"
                }
            ]
        },
        section2: {
            /**
             * Home page "Services" section.
             */
            component: (): Promise<Component> => import("./home/section-2.vue"),
            id: "services",
            pretitle: "Tjänster",
            title: "Skräddarsydda konstruktionsupplevelser",
            items: [
                {
                    _item: "service_1",
                    icon: require("./img/icon-branding.svg"),
                    title: "Snickeri och Finsnickeri",
                    content: `För att göra det så enkelt som möjligt för dig erbjuder vi totalentreprenad till badrumsrenovering.`
                },
                {
                    _item: "service_2",
                    icon: require("./img/icon-ux.svg"),
                    title: "VVS",
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.`
                },
                {
                    _item: "service_3",
                    icon: require("./img/icon-web.svg"),
                    title: "Bygga hus",
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.`
                },
                {
                    _item: "service_4",
                    icon: require("./img/icon-prototype.svg"),
                    title: "Marint snickeri",
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.`
                }
            ]
        },
        section3: {
            /**
             * Home page "work" section.
             * Note: Post settings of this section are managed via the "work" page settings
             */
            component: (): Promise<Component> => import("./home/section-3.vue"),
            id: "work",
            pretitle: "Portfölj",
            title: "Sista Projekt",
            buttons: [
                {
                    _item: "work",
                    link: "/work",
                    text: `Se alla projekt <i class="fas fa-arrow-right"></i>`,
                    classes: "btn rounded-full bg-blue-500 text-white hover:bg-blue-700 hover:text-white"
                }
            ],
            limit: 4 // Post limit
        },
        section4: {
            /**
             * Home page "Testimonials" section.
             */
            component: (): Promise<Component> => import("./home/section-4.vue"),
            id: "testimonials",
            pretitle: "Rekommendationsbrev",
            title: "Framgångshistorier",
            items: [
                {
                    _item: "testimonial_1",
                    image: require("./img/client1.jpg"),
                    content: `&ldquo; @Alpha designed and fully managed our migration to #productA and on-premises enterprise deployments. Absolutely fantastic! &rdquo;`,
                    author: "Kate Brennan",
                    info: "CEO, Sed Laudantium"
                },
                {
                    _item: "testimonial_2",
                    image: require("./img/client2.jpg"),
                    content: `&ldquo; Original, Creative and with an inborn understanding of their customer's needs. Alpha is always a pleasure to work with. &rdquo;`,
                    author: "Sebastian Hodges",
                    info: "CEO, Lorem ipsum"
                }
            ]
        },
        section5: {
            component: (): Promise<Component> => import("./home/section-5.vue"),
        },
        /**
         * Home page client logos are set via the "About" page settings below.
         */
        metatags: {
            title: "Factor Alpha Theme",
            description:
                "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions.",
            image: require("./img/logo-alpha.jpg")
        }
    },
    /**
     * Copy for the about page template.
     */
    about: {
        component: (): Promise<Component> => import("./v-about.vue"),
        pretitle: "Om oss",
        title: "Bygg företag för bygg företagare",
        content:
            "Vi erbjuder byggtjänster för era behov och trivs med mixen av stora och små projekt. Därför utför vi alla typer av byggarbeten – nybyggnationer, ombyggnationer, renoveringar och tillbyggnader – från fönsterbyte och golvläggning till kök, badrum, ett nytt garage eller varför inte ditt nya hus från grunden?",
        heroImage: require("./img/about.jpg"),
        clients: {
            id: "clients",
            pretitle: "Kunder",
            title: "Vi jobbade för stora och små företag.",
            content:
                "\n" +
                "Vi är ödmjuka att arbeta med en så stor variation av kunder som sträcker sig från tidiga fasuppstart till Fortune 500-företag.",
            items: [
                {
                    _item: "skanska",
                    link: "https://skanska.se/",
                    target: "_blank",
                    image: require("./img/skanska.svg"),
                    alt: "Skanska"
                },
                {
                    _item: "nordea",
                    link: "https://nordea.se/",
                    target: "_blank",
                    image: require("./img/nordea.svg"),
                    alt: "Nordea"
                },
                {
                    _item: "stockholms_universitet",
                    link: "https://stockholmsuniversitet.se/",
                    target: "_blank",
                    image: require("./img/stockholms-universitet.svg"),
                    alt: "Stockholms Universitet"
                },
            ]
        },
        metatags: {
            title: "About - Factor Alpha Theme",
            description:
                "Designer and Illustrator based in San Francisco.",
            image: require("./img/logo-alpha.jpg")
        }
    },
    /**
     * Copy for the work page template.
     */
    work: {
        indexRoute: "/work",
        postRoute: "/working",
        limit: 4,
        returnLinkText: "Tillbacka till alla projekter",
        pretitle: "Portfölj",
        title: "Fallstudie",
        content: "Stora projekt händer med passion, intelligens och personligt engagemang.",
        components: {
            workWrap: (): Promise<Component> => import("./work/work-wrap.vue"),
            workIndex: (): Promise<Component> => import("./work/work-index.vue"),
            workSingle: (): Promise<Component> => import("./work/work-single.vue"),
            workFeaturedImage: (): Promise<Component> => import("./work/el-featured-image.vue"),
            workHeader: (): Promise<Component> => import("./work/el-headers.vue"),
            workReturnLink: (): Promise<Component> => import("./work/el-return-link.vue"),
            workTags: (): Promise<Component> => import("./work/el-tags.vue"),
            workEntry: (): Promise<Component> => import("./work/el-entry.vue"),
            workPagination: (): Promise<Component> => import("./work/el-pagination.vue")
        },
        layout: {
            index: ["workFeaturedImage", "workHeader"],
            single: [
                "workReturnLink",
                "workHeader",
                "workFeaturedImage",
                "workEntry",
                "workTags"
            ]
        },
        metatags: {
            index: {
                title: "Work - Factor Alpha Theme",
                description: "Great projects happen with passion, intelligence, and personal commitment.",
                image: require("./img/logo-alpha.jpg")
            }
        },
        templateSettings: [
            {
                _id: "bullets",
                input: "sortable",
                label: "Additional Work Info",
                description: "Additional information about this project",
                default: [
                    { __title: "Kund", value: "Kunds namn" },
                    { __title: "Uppgift", value: "underentreprenör" },
                    { __title: "Year", value: new Date().getFullYear() },
                    { __title: "Platforms", value: "Web" },
                ],
                settings: [
                    {
                        input: "text",
                        label: "Value",
                        _id: "value"
                    }
                ]
            }
        ]
    },
    /**
     * Copy for the blog page template.
     */
    blog: {
        indexRoute: "/blog",
        postRoute: "/entry",
        limit: 4,
        returnLinkText: "Back",
        headline: "Blog",
        subheadline: "Discover The Latest",
        content: "Thoughts on design, the process of creation, and optimizing collaboration.",
        components: {
            blogIndex: (): Promise<Component> => import("./blog/blog-index.vue"),
            blogSingle: (): Promise<Component> => import("./blog/blog-single.vue"),
            featuredImage: (): Promise<Component> => import("./blog/el-featured-image.vue"),
            pagination: (): Promise<Component> => import("./blog/widget-pagination.vue"),
            authorDate: (): Promise<Component> => import("./blog/widget-author-date.vue"),
            customSingleHeader: (): Promise<Component> => import("./blog/el-single-header.vue")
        },
        layout: {
            index: ["featuredImage", "title", "subtitle", "authorDate"],
            single: [
                "customSingleHeader",
                "featuredImage",
                "meta",
                "entry",
                "social",
                "authorBio"
            ],
            meta: ["authorDate", "tags"]
        },
        notFound: {
            title: "Inga inlägg",
            subTitle: "Kan inte hitta nagra blogg artikler."
        },
        metatags: {
            index: {
                title: "Blogg",
                description:
                    "Vart blogg - allt om bygg",
                image: require("./img/logo-alpha.jpg")
            }
        }
    },
    /**
     * Copy for the contact page template.
     */
    contact: {
        component: (): Promise<Component> => import("./v-contact.vue"),
        pretitle: "Kontakt",
        title: "Låt oss prata!",
        content:
            "Ett nytt projekt är en möjlighet att skapa något unikt. Dela din idé, släpp en anteckning så kommer vi tillbaka inom kort tid.",
        heroImage: require("./img/contact.jpg"),
        resources: {
            pretitle: "Looking for something in particular?",
            title: "Resources",
            items: [
                {
                    _item: "resource_1",
                    title: "Sales",
                    content: `Interested in learning more about Alpha? Contact our product experts at <a href="mailto:example@example.com">sales@example.com</a>.`
                },
                {
                    _item: "resource_2",
                    title: "Support",
                    content: `If you don’t find what you need, please submit a support request through <a href="#">github</a>.`
                },
                {
                    _item: "resource_3",
                    title: "Business Development",
                    content: `Are you a reseller or affiliate that would like to partner with Alpha? <a href="mailto:example@example.com">partners@example.com</a>.`
                }
            ]
        },
        location: {
            pretitle: "Location",
            title: "Alpha HQ",
            content: `Feel free to drop by to spot us in our natural habitat. We’ll even pour you some coffee.  <br><br>301 Howard St. #600 <br>San Francisco, CA 94105`,
            button: {
                link: "https://goo.gl/maps/KbqqgPzqJQVL35D39",
                target: "_blank",
                text: "Open in Google Maps",
                classes: "btn rounded-full bg-blue-500 text-white hover:bg-blue-700 hover:text-white"
            },
            map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.014498913255!2d-122.39648858468193!3d37.78969997975663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858173dda8f9e3%3A0xa807172524065c9e!2s301%20Howard%20St%20%23600%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1581543011803!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`
        },
        metatags: {
            title: "Contact - Factor Alpha Theme",
            description:
                "Share your idea, drop me a note and I’ll get back to you så snart som möjligt.",
            image: require("./img/logo-alpha.jpg")
        }
    },
    /**
     * Contact form plugin settings.
     */
    contactForm: {
        //email: "example@email.com",
        submit: {
            btn: "bg-blue-500 text-white hover:bg-blue-700 hover:text-white",
            text: "Kontakt"
        },
        inputFormat: "vertical",
        confirm: {
            title: "Uppfattat!",
            subTitle: "Vi återkommer så snart som möjligt"
        },
        layout: [
            {
                label: "Namn",
                _id: "name",
                inputType: "text",
                placeholder: "Fullständigt namn",
                required: true
            },
            {
                label: "Ditt mejl",
                _id: "email",
                inputType: "email",
                placeholder: "name@example.com",
                required: true
            },
            {
                label: "Meddelande",
                _id: "message",
                inputType: "textarea",
                placeholder: "Hur kan vi hjälpa er?",
                required: true
            }
        ]
    }
}
