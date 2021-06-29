20.times do
    User.create(
        username: Faker::Internet.username,
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        email: Faker::Internet.unique.email,
        password_digest: Faker::Lorem.characters(number: 10, min_alpha: 4),
        bio: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
        avatar: Faker::LoremPixel.unique.image,
        latitude: Faker::Address.latitude,
        longitude: Faker::Address.longitude,
    )
end