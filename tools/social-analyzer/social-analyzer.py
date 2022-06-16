from importlib import import_module
SocialAnalyzer = import_module("social-analyzer").SocialAnalyzer()
results = SocialAnalyzer.run_as_object(username="eallyy", silent=False, output="json")
print(results)
