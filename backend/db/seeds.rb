10.times do
    User.create(
        username: Faker::Internet.username,
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        email: Faker::TvShows::SiliconValley.email,
        password: "test",
        bio: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
        avatar: Faker::LoremFlickr.image(size: "300x300", search_terms: ['face']),
        latitude: Faker::Address.latitude,
        longitude: Faker::Address.longitude,
        bio_video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        bio_image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['face']),
        banner: Faker::LoremPixel.image(size: "1900x600"),
        page_name: Faker::TvShows::SiliconValley.company,
        is_creator: true,
    )
end

10.times do
    User.create(
        username: Faker::Internet.username,
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        email: Faker::TvShows::SiliconValley.email,
        password: "test",
        bio: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
        avatar: Faker::LoremFlickr.image(size: "300x300", search_terms: ['face']),
        latitude: Faker::Address.latitude,
        longitude: Faker::Address.longitude,
        banner: Faker::LoremPixel.image(size: "1900x600"),
        is_creator: false,
    )
end

50.times do
    post_types = ["text", "image", "video", "link", "livestream", "audio", "poll"]
    listings = ["block_list", "allow_list"]
    Post.create(
        user: User.find(Random.rand(1...10)),
        membership_level: rand(1...5),
        title: Faker::Hacker.say_something_smart,
        subheader: "Today we'll be covering "+Faker::Hacker.noun+"s.",
        post_content: Faker::Lorem.paragraph_by_chars(number: 300, supplemental: false),
        image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['sports', 'fitness', 'nature']),
        post_type: post_types.sample,
        listing: listings.sample,
    )
end

200.times do
    Comment.create(
        comment_content: Faker::Quotes::Shakespeare.hamlet_quote,
        user: User.find(Random.rand(11...20)),
        post: Post.find(Random.rand(50)+1),
    )
end

200.times do
    Subscription.create(
        membership_level: rand(1...5),
        cost: rand(20...100),
        title: Faker::Hacker.ingverb+" "+" "+Faker::Hacker.abbreviation+" "+" "+Faker::Hacker.noun+"s",
        img_url: Faker::LoremFlickr.image(size: "300x300", search_terms: ['sports', 'fitness', 'nature']),
        subscription_status: true,
        subscribee_id: User.find(Random.rand(1...10)).id,
        subscriber_id: User.find(Random.rand(11...20)).id,
    )
end