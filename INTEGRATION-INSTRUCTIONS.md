# 🔧 Step-by-Step Integration Instructions

## ✅ What to Do

The new content chapters are ready in separate files. Here's how to add them to your app:

---

## 📍 Integration Steps

### Step 1: Open the Main File
Open: `data/modules/guides.tsx`

### Step 2: Find the Insert Location
Scroll to **line 1746** - you'll see:
```tsx
    ]
  }
];  // <-- This is the END of the array
```

### Step 3: Add a Comma
Change line 1746 from:
```tsx
  }
];
```

To:
```tsx
  },  // <-- Added comma here!
];
```

### Step 4: Copy New Chapters
Between the closing `}` and `];`, paste the content from:

**Files to Copy (in order):**
1. `NEW-CONTENT-LANDLORD-TENANT.tsx` (lines 4-309)
2. `NEW-CONTENT-ZONING.tsx` (lines 4-351)

**Note:** Skip the comment lines at the top of each file (lines 1-3). Start copying from the `{` on line 4.

### Step 5: Final Structure Should Look Like:
```tsx
      }  // <-- End of Sex Offenders section
    ]
  },  // <-- Added comma!
  {
    id: 'landlord-tenant',
    title: '8. MA Landlord-Tenant Law',
    // ... rest of landlord-tenant content
  },
  {
    id: 'zoning',
    title: '9. Land Use Controls & Zoning',
    // ... rest of zoning content
  }
];  // <-- End of array
```

---

## 🎯 Quick Copy Reference

### For Landlord-Tenant Chapter:
- Open `NEW-CONTENT-LANDLORD-TENANT.tsx`
- Select from line 4 to line 309
- Copy and paste after the comma you added

### For Zoning Chapter:
- Open `NEW-CONTENT-ZONING.tsx`
- Select from line 4 to line 351
- Copy and paste after the landlord-tenant chapter
- Add comma after the landlord-tenant chapter's closing `}`

---

## ✅ After Integration

### Test the Build:
```bash
npm run build
```

### Expected Result:
```
✓ 57 modules transformed
✓ built in ~2s
```

### Verify in App:
1. Run `npm run dev`
2. Look for new chapters in sidebar:
   - "8. MA Landlord-Tenant Law"
   - "9. Land Use Controls & Zoning"

---

## ⚠️ Common Issues

### Issue 1: Missing Comma
**Error:** `Unexpected token`  
**Fix:** Make sure you added comma after line 1746

### Issue 2: Extra Bracket
**Error:** `Unexpected token ']'`  
**Fix:** Don't add extra closing brackets

### Issue 3: Icon Not Found
**Error:** `BuildingIcon is not defined`  
**Fix:** Already added to imports - should work

---

## 📊 What You're Adding

### Chapter 8: Landlord-Tenant (310 lines)
- 6 major sections
- Security deposit rules (1-month max)
- Notice requirements (30/14/7 days)  
- Eviction process
- Tenant rights
- Prohibited provisions

### Chapter 9: Zoning (280 lines)
- 6 major sections  
- Government powers (PETE)
- Zoning classifications (R-1/R-2/R-3)
- Variance vs. Special Exception
- Non-conforming uses
- Building codes

---

## 🎓 Alternative: Manual Entry

If copying is difficult, I can show you each section one at a time. Just ask:
"Show me landlord-tenant section 1" etc.

---

## ✅ Verification Checklist

After integration:
- [ ] App builds without errors
- [ ] New chapters appear in sidebar
- [ ] All 6 sections show in each chapter
- [ ] Tables render correctly
- [ ] Examples are readable
- [ ] Icons display properly

---

**Need help with integration? Just say "help me integrate" and I'll walk through it step by step!**
