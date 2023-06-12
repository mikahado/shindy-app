
puts "seedin"

User.destroy_all
Customer.destroy_all
Punchcard.destroy_all

name = ["Mary Cherry","Anna Banana","Emma Pajama","Elizabeth Muffin","Minnie Winnie","Margaret Carrot","Ida Cheetah","Alice Palace","Bertha Gerta","Sarah Sahara","Annie Fanny","Clara Chimera","Ella Nutella","Florence Forensics","Cora Aurora"]

reward = ["25% off next purchase", "One Free Coffee", "15% off next purchase", "Two for One"]

count = [10,15,20]
user_id = [1,2,3,4,5]
customer_id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]

email = ['a@a.com, b@b.com, c@c.com']


id_counter = 1
punchcard_id_counter = 1
customer_id_counter = 1


User.create(id: 1, username: "maikas_diner", email: email.sample, password: "maikasdiner")
User.create(id: 2, username: "maikas_cafe", email: email.sample,password: "maikascafe")
User.create(id: 3, username: "maikas_bar", email: email.sample,password: "maikasbar")
User.create(id: 4, username: "maikas_shop", email: email.sample,password: "maikasshop")
User.create(id: 5, username: "maikas_salon", email: email.sample,password: "maikassalon", )

12.times do
    customer = Customer.create(
        id: id_counter,
        name: name.sample
        )
    id_counter += 1
end

20.times do
    punchcard = Punchcard.create(
        id: punchcard_id_counter,
        count: count.sample,
        reward: reward.sample,
        user_id: user_id.sample,
        customer_id: customer_id.sample,
    )
    punchcard_id_counter += 1
end

puts "been dun seeded"