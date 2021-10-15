FactoryBot.define do
  factory :news_article do
    title { "MyString" }
    description { "MyText" }
    published_at { "2021-10-14 16:08:31" }
    view_count { 1 }
  end
end
