> [!info|piranha-header p1]+ Level
> example 
> > [!info|piranha-header p2]+ Level
> >  This
> > > [!info|piranha-header p3]+ Level
> > >  Level 3!
> > > > [!info|piranha-header p4]+ Level
> > > > ermeger
> > > > > [!info|piranha-header p5]+ Level
> > > > > duuuude
> > > > > > [!info|piranha-header p6]+ Level
> > > > > > ahhhhhhhhh!


Standalone headers

> [!info|piranha-header p3]+ Level
> good

> [!info|piranha-header p6]+ Level
> good

# Same level
> [!info|piranha-header p1]+ Level 1
>
> > [!info|piranha-header p2]+ Level 2
> >
> > > [!info|piranha-header p3]+ Level 3 (First one)
> > > content
> >
> > > [!info|piranha-header p3]+ Level 3 (Second one)
> > > content

# Reverse

> [!info|piranha-header p1]+ Level 1
>
> > [!info|piranha-header p2]+ Level 2 (Top)
> >
> > > [!info|piranha-header p3]+ Level 3
> > > I am tucked inside.
> > %% line break %%
> > [!info|piranha-header p2]+ Level 2 (Bottom)
> > I am back at the Level 2 depth.

# Logic
|**Desired Action**|**Logic**|
|---|---|
|**Go Deeper**|Add a `>` (e.g., `> > >` becomes `> > > >`)|
|**Stay at same depth**|Use a blank line with the _parent's_ `>` count, then repeat the current `>` count.|
|**Go back up**|Remove a `>` (e.g., `> > >` becomes `> >`)|