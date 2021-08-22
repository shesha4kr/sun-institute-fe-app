Description:
This is Student Portal for Sun Institute. Students can see their performance in the mock tests which are held every month. Admin can update the details of the students

***********************************************************************************************************************************************************************************

About Login Page:
1) User can login as Student/Admin
2) Login button will be enabled only if user fills both the fields
3) If user enters wrong credentials, login button will become red and a snack bar will be presented to the user with details
4) Login Page will only load if LocalStorage will contain item isLoggedIn as true
5) If isLoggedIn is true, then LoginPage will not be launched. (achieved through canActivate guard)
6) In above case either Student Homepage or Admin HomePage will be launched based on userType stored in LocalStorage (achieved through canLoad guard)
