
puts "seedin"

User.destroy_all
Customer.destroy_all
Punchcard.destroy_all

name = ["Mary Cherry","Anna Banana","Emma Pajama","Elizabeth Muffin","Minnie Winnie","Margaret Carrot","Ida Cheetah","Alice Palace","Bertha Gerta","Sarah Sahara","Annie Fanny","Clara Chimera","Ella Nutella","Florence Forensics","Cora Aurora","Martha Scarpa","Laura Flora","Nellie Smelly","Grace Space","Carrie Scary","Maude Claude","Mabel Gable","Bessie Jessie","Jennie Penny","Gertrude Rude","Julia Coolia","Hattie Catty","Edith Digits","Mattie Catty","Rose Foes","Catherine Latrine","Lillian Billion","Ada Nada","Lillie Silly","Helen Melon","Jessie Messy","Louise Squeeze","Ethel Pebble","Lula Formula","Myrtle Turtle","Eva Diva","Frances Dances","Lena Cena","Lucy Goosey","Edna Kedna","Maggie Baggy","Pearl Squirrel","Daisy Lazy","Fannie Nanny","Josephine Morphine","Dora Explorer","Rosa Poser","Katherine Grapevine","Agnes Lasagne","Marie Safari","Nora Aurora","May Ray","Mamie Yammy","Blanche Ranch","Stella Umbrella","Ellen Smellen","Nancy Fancy","Effie Taffy","Sallie Rally","Nettie Betty","Della Umbrella","Lizzie Bizzy","Flora Dora","Susie Snoozy","Maud Fraud","Mae Bay","Etta Jetta","Harriet Parrot","Sadie Lady","Caroline Rhine","Katie Skatie","Lydia Lidia","Elsie Kelsey","Kate Plate","Susan Dozen","Mollie Jolly","Alma Calmer","Addie Daddy","Georgia Flora","Eliza Pizza","Lulu Goo-goo","Nannie Fanny","Lottie Dottie","Amanda Panda","Belle Shell","Charlotte Scarlet","Rebecca Pecca","Ruth Tooth","Viola Viola","Olive Solve","Amelia Sicilia","Hannah Montana","Jane Crane","Virginia Argentina","Emily Smiley","Matilda Hilda","Irene Serene","Kathryn Catherin","Esther Cester","Willie Chili","Henrietta Spaghetti","Ollie Folly","Amy Miami","Rachel Hachel","Sara Sahra","Estella Fella","Theresa Treasa","Augusta Fuster","Ora Aurora","Pauline Clean","Josie Nosey","Lola Crayola","Sophia Sofa","Leona Mona","Anne Pan","Mildred Pillared","Ann Pan","Beulah Cooler","Callie Sally","Lou Blue","Delia Amelia","Eleanor Smelther","Barbara Scarf-a","Iva Diva","Louisa Mariposa","Maria Pizzeria","Mayme Game","Evelyn Melon","Estelle Bell","Nina Mina","Betty Getti","Marion Dalmatian","Bettie Yeti","Dorothy Glory","Luella Cruella","Inez Knees","Lela Bella","Rosie Cozy","Allie Hally","Millie Tilly","Janie Rainy","Cornelia Nelia","Victoria Horia","Ruby Doobie","Winifred Manfred","Alta Malta","Celia Amelia","Christine Teen", "Rosalie Posie", "Natalie Valley", "Jasmine Raisin", "Evelina Selena", "Marianne Dianne", "Greta Feta", "Daphne Taffy", "Leah Pea", "Naomi Salami", "Felicia Delicia", "Priscilla Vanilla", "Gloria Victoria", "Roberta Berta", "Teresa Fresa", "Lucinda Winda", "Isabelle Dazzle", "Margo Fargot", "Violet Pilot", "Penelope Cantaloupe", "Sandra Panda", "Thelma Velma", "Yvette Corvette", "Camille Chameleon", "Sabrina Marina", "Francine Cuisine", "Roxanne Boxanne", "Annette Corvette", "Desiree Sneeze", "Gilda Hilda", "Maeve Brave", "Jocelyn Tinsel", "Lorena Arena", "Debra Zebra", "Nicolette Colette", "Simone Alone", "Aurora Borealis", "Celeste Fest", "Jillian Million", "Gwendolyn Dolphin", "Kendra Tendre", "Elaine Crane", "Elvira Shivera", "Roxana Montana", "Shirley Hurley", "Vanessa Banessa", "Donna Wanna", "Adeline Feline", "Bonnie Conny", "Carmen Sarmen", "Diane Cane", "Marcella Fella", "Pearlie Girly", "Ramona Mona", "Wendy Trendy", "Audrey Maude-ry", "Marlene Charlene", "Melanie Felony", "Ophelia Delia", "Sylvia Silvia", "Veronica Electronica", "Bridget Widget", "Harmony Mony", "Liza Pizza", "Maureen Soreen", "Nola Viola", "Prudence Nuisance", "Rhonda Fonda", "Sonia Tonja", "Tiffany Daffany", "Valerie Celery", "Elise Paradise", "Frieda Creeda", "Gwen Ken", "Hope Pope", "Judy Moody", "Kara Sahara" ]

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

80.times do
    customer = Customer.create(
        id: id_counter,
        name: name.sample
        )
    id_counter += 1
end

260.times do
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