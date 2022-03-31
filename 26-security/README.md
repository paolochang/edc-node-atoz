# Security

## Cross-Site Scripting Attack (XSS)

Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.

An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page. For more details on the different types of XSS flaws, see: [Types of Cross-Site Scripting](https://owasp.org/www-community/Types_of_Cross-Site_Scripting).

### Solutions

#### In memory: ✅

##### PROS:

- Secure
- Easy to implement

##### CONS:

- Bad UX (Cannot keep user login)

#### Cookie with `HttpOnly`: ✅

##### PROS:

- Not accessible to javascript running on your website (secure)
- Remains available until expire (maintain logged in state between page reloads)

##### CONS:

- `HttpOnly` only supports webclient, mobile client cannot use `HttpOnly`
- REST APIs don't normally use cookies
- Susceptible to `CSFR attack`

## Reference

- [OWASP Node Goat Tutorial: Fixing OWASP Top 10](https://nodegoat.herokuapp.com/tutorial)
- [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)
