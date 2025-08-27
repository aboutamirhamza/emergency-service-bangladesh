1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:

---

        1. getElementById Eta shudhu Element id ferot dei.
        2. getElementsByClassName ekoi class er sob element ferot dei.
        3. querySelector CSS selector diye prothom element ferot dei.
        4. querySelectorAll CSS selector diye sob element ferot dei Static NodeList।

2. How do you create and insert a new element into the DOM?
   Answer:

---

        1. document.createElement() notun element make kore dei.
        2. document.appendChild() notun element ti DOM a bosiye dei.

3. What is Event Bubbling and how does it work?
   Answer:

---

        Event Bubbling mane holo ekta child element a event ghotle sei event er upor parent er upor grandparent er upor root document porjonto uthe jai.

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:

---

        Event Delegation holo ekta technique jekhane amra parent element a event listener bosai ar sei parent er vitor sob child element er event Handle kori event bubbling use kore.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:

---

        1. event.preventDefault() Browser er default behaviour off kore.
        2. event.stopPropagation() Event bubble howa thamay parent r jay na.
