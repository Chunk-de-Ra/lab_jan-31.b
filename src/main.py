import asyncio
import os, os.path
import tornado.web
import updateprofile, updateprofile2, Profile

HTMLDIR = os.path.abspath(os.path.join(os.path.dirname(__file__),"..","html"))

def makeApp():
    endpoints=[
        ("/updateprofile",updateprofile.Handler),
        ("/updateprofile2",updateprofile2.Handler),
        ("/profile/.*",Profile.Handler)]
    app = tornado.web.Application(endpoints,static_path=HTMLDIR)
    app.listen(8000)
    return app

if __name__ == "__main__":
    app = makeApp()
    asyncio.get_event_loop().run_forever()