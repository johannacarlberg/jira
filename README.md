# Run this app with npm start

## JIRA INSTRUCTIONS
##  cd /Applications/atlassian-jira-software-7.1.7-standalone/bin
##  run startup.sh
## Go to: http://localhost:8080/


## TO CONNECT TO A RUNNING JIRA SERVER, DO:
## - curl -u admin:admin http://localhost:8080/jira/rest/api/2/issue/JIRA-1
## THIS WILL GIVE A 401 UNAUTHORIZED, SORT OUT AUTHENTICATION

 AUTHENTICATION

 ## curl -D- -u username:password -X GET -H "Content-Type: application/json" http://localhost:8080/rest/api/2/issue/JIRA-1


