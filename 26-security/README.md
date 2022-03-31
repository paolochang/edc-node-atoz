# Security

## Cross-Site Scripting (XSS) Attack

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

## Cross-Site Request Forgery (CSRF) Attack

Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker’s choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.

CSRF attacks are also known by a number of other names, including XSRF, “Sea Surf”, Session Riding, Cross-Site Reference Forgery, and Hostile Linking. Microsoft refers to this type of attack as a One-Click attack in their threat modeling process and many places in their online documentation.

### Solutions

<img src="/assets/csrf-solution.png" width="600px" title="CSRF Solution" alt="CSRF Solution"></img><br/>

1. `XSS Attack`은 Hacker가 JavaScript를 이용하여 localStorage에 저장된 중요 정보를 읽어가는 것이 문제였는데 더이상 localStorage에 저장된 정보가 없으므로 안전하다.
2. 단순히 Request를 한다고해서 Browser내 `cookie`에 토큰으로 `Session Riding`을 한다고 해도, 어플리캐이션에서 발행한 `csrf token`가 메모리상에 있어야 하므로 `CSRF Attack`에도 안전하다.

## Reference

- [OWASP Node Goat Tutorial: Fixing OWASP Top 10](https://nodegoat.herokuapp.com/tutorial)
- [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)
- [Cross Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)
