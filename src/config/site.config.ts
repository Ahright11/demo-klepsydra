// Site Configuration - Edit this file to customize your restaurant website

export const siteConfig = {
  // Business Information
  businessName: "Klepsydra",
  tagline: "Στην καρδιά της Πλάκας, όπου ο χρόνος κυλάει αλλιώς",
  description: "Παραδοσιακό cafe-εστιατόριο στην ιστορική Πλάκα, δίπλα στην αρχαία Κλεψύδρα, που προσφέρει αυθεντική ελληνική φιλοξενία από το πρωινό καφέ μέχρι το βραδινό ποτό, κάθε μέρα από το 1985",
  foundedYear: 1985,

  // Story / About
  about: {
    founderName: "Γιάννης",
    founderRelation: "ιδιοκτήτης",
    familyMember: "Ελένη",
    familyRelation: "κόρη",
    familyQuote: "Η Κλεψύδρα δεν είναι απλά ένα cafe - είναι το σπίτι της γειτονιάς μας",
    location: "Πλάκα",
    story: "Στο πιο γραφικό σημείο της Πλάκας, δίπλα στην αρχαία Κλεψύδρα που έδωσε το όνομά της στην οδό, το cafe μας είναι ένα κομμάτι της αυθεντικής Αθήνας από το 1985. Ο Γιάννης και η κόρη του Ελένη διατηρούν ζωντανό το πνεύμα της παλιάς γειτονιάς, υποδεχόμενοι ντόπιους και επισκέπτες σε έναν χώρο όπου ο χρόνος φαίνεται να κυλάει αλλιώτικα. Από τον πρωινό ελληνικό καφέ μέχρι το βραδινό ούζο κάτω από τα πλατάνια, η Κλεψύδρα είναι το μέρος όπου δημιουργούνται αναμνήσεις και γράφονται ιστορίες.",
    sourcing: [
      "Φρέσκα υλικά από την κεντρική αγορά της Αθήνας",
      "Παραδοσιακές συνταγές από την Πλάκα",
      "Επιλεγμένοι ελληνικοί καφέδες και ποτά"
    ],
    musicNights: "Ζωντανή μουσική κάθε Παρασκευή και Σάββατο βράδυ με παραδοσιακά ελληνικά τραγούδια"
  },

  // Contact Information
  phone: "+302103212493",
  phoneDisplay: "21 0321 2493",
  whatsapp: "302103212493",
  whatsappMessage: "Γεια σας, θα ήθελα πληροφορίες για κράτηση στην Κλεψύδρα.",
  email: "info@klepsydra.gr",
  address: {
    street: "Κλεψίδρας",
    city: "Αθήνα",
    postalCode: "105 56",
    full: "Κλεψίδρας, Αθήνα 105 56"
  },

  // Social Links
  socialLinks: {
    instagram: "",
    facebook: "https://m.facebook.com/klepsidracafe/",
    tripadvisor: "",
    googleReviews: "https://www.google.com/maps/place/Klepsydra",
  },

  // Delivery Platforms
  delivery: {
    efood: "",
    wolt: "",
  },

  // Working Hours
  hours: [
    { day: "Δευτέρα", time: "9:00 - 1:00" },
    { day: "Τρίτη", time: "9:00 - 1:00" },
    { day: "Τετάρτη", time: "9:00 - 1:00" },
    { day: "Πέμπτη", time: "9:00 - 1:00" },
    { day: "Παρασκευή", time: "9:00 - 1:00" },
    { day: "Σάββατο", time: "9:00 - 1:00" },
    { day: "Κυριακή", time: "9:00 - 1:00" },
  ],

  // Ratings
  rating: 4.4,
  totalReviews: 287,

  // Parking
  parking: "Δημόσιο parking στην περιοχή της Πλάκας",

  // Google Maps
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.8!2d23.7275!3d37.9715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1a8c5b6c2d%3A0x5e8f2a1b3c4d5e6f!2sKlepsydra!5e0!3m2!1sel!2sgr!4v1234567890",
  mapsDirectionsUrl: "https://www.google.com/maps/dir//Κλεψίδρας,+Αθήνα+105+56",

  // Special Dish (featured on menu page)
  specialDish: {
    name: "Μεζεδάκια Πλάκας",
    description: "Παραδοσιακή επιλογή μεζέδων με φέτα, ελιές, ντοματίνια και ντάκο",
    price: 12.50,
  },

  // Menu
  menu: [
    {
      id: "prwino",
      name: "Πρωινό",
      items: [
        { name: "Ελληνικό πρωινό", description: "Αυγά, φέτα, ντοματίνια, ελιές, ψωμί", price: 8.50 },
        { name: "Ομελέτα", description: "Με τυρί ή λαχανικά", price: 7.00 },
        { name: "Τοστ ειδικό", description: "Με φέτα, ντομάτα και ρίγανη", price: 5.50 },
        { name: "Τυρόπιτα σπιτική", description: "Φρεσκοφτιαγμένη κάθε μέρα", price: 4.50 },
        { name: "Σπανακόπιτα", description: "Παραδοσιακή συνταγή", price: 4.50 },
        { name: "Κρουασάν", description: "Απλό ή με σοκολάτα", price: 3.50 },
      ],
    },
    {
      id: "mezedes",
      name: "Μεζέδες & Ορεκτικά",
      items: [
        { name: "Μεζεδάκια Πλάκας", description: "Φέτα, ελιές, ντοματίνια, ντάκο", price: 12.50, isSpecial: true },
        { name: "Φέτα με μέλι και σουσάμι", description: "Φούρνου με θυμαρίσιο μέλι", price: 8.00 },
        { name: "Τζατζίκι", description: "Σπιτικό με φρέσκο αγγούρι", price: 5.50 },
        { name: "Μελιτζανοσαλάτα", description: "Ψητή με σκόρδο", price: 6.00 },
        { name: "Τηγανητές πατάτες", description: "Με ρίγανη και λεμόνι", price: 5.00 },
        { name: "Ντολμαδάκια", description: "Γιαλαντζί με ρύζι", price: 7.50 },
        { name: "Κολοκυθοκεφτέδες", description: "Με φέτα και δυόσμο", price: 8.50 },
        { name: "Σαγανάκι", description: "Τηγανητό κασέρι με λεμόνι", price: 7.50 },
      ],
    },
    {
      id: "salates",
      name: "Σαλάτες",
      items: [
        { name: "Χωριάτικη", description: "Ντομάτα, αγγούρι, φέτα, κάππαρη, ελιές", price: 8.50 },
        { name: "Ντάκος", description: "Κρητικός με φρέσκια ντομάτα και φέτα", price: 7.50 },
        { name: "Πράσινη σαλάτα", description: "Με βαλσάμικο και λάδι", price: 6.50 },
        { name: "Ρόκα με παρμεζάνα", description: "Με cherry ντοματίνια", price: 7.00 },
      ],
    },
    {
      id: "kyria-piata",
      name: "Κύρια Πιάτα",
      items: [
        { name: "Μουσακάς", description: "Παραδοσιακός με μπεσαμέλ", price: 11.50 },
        { name: "Παστίτσιο", description: "Σπιτικό με κιμά", price: 11.00 },
        { name: "Παπουτσάκια", description: "Μελιτζάνες γεμιστές με κιμά", price: 11.50 },
        { name: "Γεμιστά", description: "Ντομάτες και πιπεριές με ρύζι", price: 10.00 },
        { name: "Σουβλάκι καλαμάκι", description: "Χοιρινό ή κοτόπουλο (2 τεμ.)", price: 9.50 },
        { name: "Μπριζόλα χοιρινή", description: "Με πατάτες", price: 12.50 },
        { name: "Κοτόπουλο λεμονάτο", description: "Με πατάτες φούρνου", price: 11.50 },
        { name: "Χταπόδι ξιδάτο", description: "Με ελαιόλαδο και ρίγανη", price: 14.50 },
      ],
    },
    {
      id: "makaronia",
      name: "Μακαρονάδες",
      items: [
        { name: "Σπαγγέτι με κιμά", description: "Κλασική συνταγή", price: 9.00 },
        { name: "Πέννες με φρέσκια ντομάτα", description: "Και βασιλικό", price: 8.50 },
        { name: "Καρμπονάρα", description: "Με μπέικον και κρέμα γάλακτος", price: 10.00 },
        { name: "Αραμπιάτα", description: "Πικάντικη με ντομάτα", price: 9.00 },
      ],
    },
    {
      id: "kafedes",
      name: "Καφέδες",
      items: [
        { name: "Ελληνικός", description: "Σκέτος, μέτριος ή γλυκός", price: 3.00 },
        { name: "Espresso", description: "Μονός ή διπλός", price: 3.50 },
        { name: "Cappuccino", description: "Με αφρόγαλα", price: 4.00 },
        { name: "Freddo espresso", description: "Κρύος με αφρόγαλα", price: 4.00 },
        { name: "Freddo cappuccino", description: "Με κρύο γάλα", price: 4.50 },
        { name: "Φραπέ", description: "Κλασικός ελληνικός", price: 3.50 },
        { name: "Καφές φίλτρου", description: "Αμερικάνικος", price: 3.50 },
      ],
    },
    {
      id: "pota",
      name: "Ποτά",
      items: [
        { name: "Κρασί κόκκινο", description: "Ποτήρι ή καράφα", price: 5.00 },
        { name: "Κρασί λευκό", description: "Ποτήρι ή καράφα", price: 5.00 },
        { name: "Ρετσίνα", description: "Παραδοσιακή - 500ml", price: 8.00 },
        { name: "Μπύρα", description: "Mythos, Alfa, Fix (330ml)", price: 4.50 },
        { name: "Ούζο", description: "Με μεζεδάκια", price: 5.50 },
        { name: "Τσίπουρο", description: "50ml", price: 5.50 },
        { name: "Κοκτέιλ", description: "Διάφορα", price: 8.00 },
        { name: "Αναψυκτικά", description: "Coca Cola, Fanta, Sprite, Soda", price: 3.00 },
        { name: "Χυμός φυσικός", description: "Πορτοκάλι ή λεμονάδα", price: 4.50 },
        { name: "Νερό", description: "500ml", price: 1.50 },
      ],
    },
    {
      id: "glyka",
      name: "Γλυκά",
      items: [
        { name: "Μπακλαβάς", description: "Με καρύδια και μέλι", price: 5.00 },
        { name: "Γαλακτομπούρεκο", description: "Παραδοσιακό", price: 5.00 },
        { name: "Καταΐφι", description: "Με κρέμα", price: 5.00 },
        { name: "Γιαούρτι με μέλι", description: "Στραγγιστό με καρύδια", price: 5.50 },
        { name: "Παγωτό", description: "Διάφορες γεύσεις (2 μπάλες)", price: 4.50 },
        { name: "Πάστα ημέρας", description: "Ρωτήστε το σερβιτόρο", price: 5.50 },
      ],
    },
  ],

  // Live Music Events
  events: [
    {
      id: 1,
      title: "Παραδοσιακά Τραγούδια της Πλάκας",
      date: "2026-02-14",
      time: "21:00",
      artist: "Γιώργης Μαργαρίτης",
      description: "Ζωντανή μουσική με παραδοσιακά ελληνικά τραγούδια και ρεμπέτικα",
      imageId: "music-1"
    },
    {
      id: 2,
      title: "Βραδιά Λαϊκής Μουσικής",
      date: "2026-02-21",
      time: "21:00",
      artist: "Μαρία Καλογεράκη",
      description: "Λαϊκά τραγούδια από την παλιά Αθήνα",
      imageId: "music-2"
    },
    {
      id: 3,
      title: "Κιθάρα & Τραγούδι",
      date: "2026-02-28",
      time: "21:00",
      artist: "Νίκος Ζαχαρίας",
      description: "Ακουστική κιθάρα με αγαπημένα ελληνικά τραγούδια",
      imageId: "music-3"
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Μαρία Δ.",
      rating: 5,
      time: "πριν 2 εβδομάδες",
      text: "Υπέροχη τοποθεσία με μοναδική θέα στην παλιά Αθήνα. Η ατμόσφαιρα είναι ό,τι πρέπει για έναν αυθεντικό ελληνικό καφέ. Το πρωινό ήταν φρεσκότατο και οι τιμές πολύ λογικές για την Πλάκα.",
      platform: "google" as const,
    },
    {
      name: "Γιώργος Κ.",
      rating: 5,
      time: "πριν 1 μήνα",
      text: "Από τον πρωινό μου καφέ μέχρι το βραδινό ούζο, πάντα νιώθω σαν στο σπίτι μου. Η εξυπηρέτηση είναι οικογενειακή και ζεστή. Δοκιμάσαμε τα μεζεδάκια Πλάκας και ήταν εξαιρετικά - ειδικά η φέτα με μέλι!",
      platform: "google" as const,
    },
    {
      name: "Anna S.",
      rating: 5,
      time: "πριν 3 εβδομάδες",
      text: "A hidden gem in Plaka! The atmosphere is authentic and charming, not touristy at all. We had the traditional mezze platter and homemade moussaka - both were delicious. The live music on Friday night made it even more special. Highly recommend!",
      platform: "tripadvisor" as const,
    },
    {
      name: "Δημήτρης Π.",
      rating: 5,
      time: "πριν 10 ημέρες",
      text: "Ένα κομμάτι της πραγματικής Πλάκας που δεν έχει χάσει την αυθεντικότητά του. Τιμές λογικές, φαγητό νόστιμο και η ζωντανή μουσική το Σάββατο βράδυ ήταν υπέροχη. Το μουσακάς και το σαγανάκι ήταν από τα καλύτερα που έχω φάει!",
      platform: "google" as const,
    },
    {
      name: "Κατερίνα Μ.",
      rating: 5,
      time: "πριν 1 εβδομάδα",
      text: "Το αγαπημένο μου μέρος στην Πλάκα! Κάθε φορά που έρχονται φίλοι από το εξωτερικό τους φέρνω εδώ. Η θέα είναι μαγευτική, το φαγητό πάντα φρέσκο και το προσωπικό πολύ φιλικό. Ο ελληνικός καφές είναι όπως πρέπει!",
      platform: "google" as const,
    },
    {
      name: "Thomas L.",
      rating: 5,
      time: "πριν 2 μήνες",
      text: "We stumbled upon this place while exploring Plaka and it was the highlight of our Athens trip. The staff was incredibly welcoming, the food was authentic Greek cuisine (loved the kolokithokeftedes!), and the setting is magical. We came back three times during our week in Athens!",
      platform: "tripadvisor" as const,
    },
  ],

  // Gallery
  gallery: [
    { id: 1, alt: "Εξωτερικός χώρος της Κλεψύδρας με τραπεζάκια κάτω από πλατάνια στην Πλάκα" },
    { id: 2, alt: "Μεζεδάκια Πλάκας - φέτα, ελιές, ντοματίνια και ντάκος" },
    { id: 3, alt: "Παραδοσιακός ελληνικός καφές με γλυκό του κουταλιού" },
    { id: 4, alt: "Εσωτερικός χώρος με παραδοσιακή διακόσμηση και vintage λεπτομέρειες" },
    { id: 5, alt: "Θέα προς την αρχαία Κλεψύδρα και τα γραφικά σοκάκια της Πλάκας" },
    { id: 6, alt: "Ζωντανή μουσική βραδιά με παραδοσιακά ελληνικά τραγούδια" },
  ],

  // Copyright
  copyrightYear: 2026,
};

export type SiteConfig = typeof siteConfig;
