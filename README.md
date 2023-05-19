Written by: **Guy McDowell** (https://helpdeskgeek.com/how-to/block-websites-using-hosts-file/)

**Blocking Websites With The Hosts File**
-----------------------------------------

1.  Open **Notepad** as **Administrator**.

![](https://helpdeskgeek.com/wp-content/pictures/2020/06/notepad-run-as-admin.png)

2.  Click on **File** \> **Open**. 

![](https://helpdeskgeek.com/wp-content/pictures/2020/06/notepad-file-open.png)

3.  Navigate to **C:\\Windows\\System32\\Drivers\\etc**

![](https://helpdeskgeek.com/wp-content/pictures/2020/06/navigate-to-hosts-file.png)

4.  Once there, change file type from **Text Documents (\*.txt)** to **All Files (\*.\*)**.

![](https://helpdeskgeek.com/wp-content/pictures/2020/06/change-filetype.png)

5.  Now you can see the **hosts** file. Open it.

![](https://helpdeskgeek.com/wp-content/pictures/2020/06/hosts.file_.visible.png)

6.  Go to the last line of the page and add your own line. Let’s say we’re blocking Facebook.

![](https://helpdeskgeek.com/wp-content/pictures/2020/06/hosts-file-unaltered.jpg)

Enter the localhost IP of **127.0.0.1**. Press the tab key and enter **facebook.com**. Press Enter to go to the next line. Create a second line like the one above, but use **www.facebook.com** instead of just facebook.com. 

![](https://helpdeskgeek.com/wp-content/pictures/2020/06/facebook-localhost-entries.png)

**Is The Website Blocked?** 
----------------------------

Open the command prompt and run **ping facebook.com** then run **ping www.facebook.com**. You should see that the IP address it’s trying to ping is 127.0.0.1.

![](https://helpdeskgeek.com/wp-content/pictures/2020/06/ping-facebook-localhost.jpg)

Now open your web browser and go to facebook.com. It might still load! Why? Facebook’s real IP may still be sitting in the browser cache and the browser will use that IP first. [Delete your browser’s cache](https://www.online-tech-tips.com/computer-tips/how-to-clear-the-cache-of-any-web-browser/) and try Facebook again. You should now see an error page.

![](https://helpdeskgeek.com/wp-content/pictures/2020/06/facebook-error-message.png)

-----------------------------------------

**AdGuard Filter:**

https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt

https://github.com/AdguardTeam/AdGuardSDNSFilter

https://github.com/AdguardTeam/AdGuardSDNSFilter/tree/master/Filters
