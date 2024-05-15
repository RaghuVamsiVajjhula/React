import {a,c} from './newmodule1.mjs'
console.log(a);
console.log(c);

// Here we can only import with the names of the variables as {a,c}  as they
// are saved as the names a,c in the newmodule.mjs file.

// if you import with somename like a1 or something like we have used
//  ui in the defaultexport folder we see errors.
