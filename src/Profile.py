import tornado.web

users = {
    "alice": ["Alice Smith","Jan 1","alice@example.com"],
    "bob": ["Bob Jones","Dec 31","bob@bob.xyz"],
    "carol": ["Carol Ling","Jul 17","carol@example.com"],
    "dave": ["Dave N Port","Mar 14","dave@dave.dave"]
}

class Handler(tornado.web.RequestHandler):
    def get(self):
        username = self.request.path.replace("/profile/","")
        if username in users.keys():
            user_info = users[username]
            self.render("../html/profile_page.html",
                        name = user_info[0],
                        bday = user_info[1],
                        email = user_info[2])