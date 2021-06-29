20.times do
    User.create(
        username: Faker::Internet.username,
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        email: Faker::TvShows::SiliconValley.email,
        password_digest: Faker::Lorem.characters(number: 10, min_alpha: 4),
        bio: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
        avatar: Faker::LoremFlickr.image(size: "300x300", search_terms: ['face']),
        latitude: Faker::Address.latitude,
        longitude: Faker::Address.longitude,
        page_name: Faker::Company.catch_phrase,
        bio_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        bio_image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['face']),
        banner: Faker::LoremPixel.image(size: "1900x600"),
        is_creator: false,
    )
end

20.times do
    User.create(
        username: Faker::Internet.username,
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        email: Faker::TvShows::SiliconValley.email,
        password_digest: Faker::Lorem.characters(number: 10, min_alpha: 4),
        bio: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
        avatar: Faker::LoremFlickr.image(size: "300x300", search_terms: ['face']),
        latitude: Faker::Address.latitude,
        longitude: Faker::Address.longitude,
        page_name: Faker::Company.catch_phrase,
        bio_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        bio_image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['face']),
        banner: Faker::LoremPixel.image(size: "1900x600"),
        is_creator: true,
    )
end

20.times do
    Post.create(
        thing: Thing.find(Random.rand(20)+1),
        membership_level: Membership_level.find(Random.rand(20)+1),
        title: Faker::IndustrySegments.industry,
        header: Faker::IndustrySegments.sector,
        subheader: Faker::Lorem.paragraph_by_chars(number: 200, supplemental: false),
        description: Faker::Lorem.paragraph_by_chars(number: 300, supplemental: false),
        image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['sports', 'fitness', 'nature']),
        type: "text" || "image" || "video" || "link" || "livestream" || "audio" || "poll",
    )
end

20.times do
    Comment.create(
        text: Faker::Quotes::Shakespeare.hamlet_quote,
        user: User.find(Random.rand(20)+1),
        post: Post.find(Random.rand(20)+1),
    )
end

20.times do
    Subscription.create(
        membership_level: rand(1...5),
        cost: rand(20...100),
        title: Faker::IndustrySegments.industry,
        img_url: Faker::LoremFlickr.image(size: "300x300", search_terms: ['sports', 'fitness', 'nature']),
        type: "block_list" || "allow_list",
        subscription_status: true,
        subscriber_id: User.ids.sample,
        subscribee_id: User.ids.sample,
    )
end