<?php
# This is a config.php file for the MoniWiki
# automatically detect your environment and set some default variables.
# 2016-09-19 05:20:47 by monisetup.php
# This is a config.php file for the MoniWiki
# automatically detect your environment and set some default variables.
# 2015-11-25 07:53:51 by monisetup.php
# This is a config.php file for the MoniWiki
# automatically detect your environment and set some default variables.
# 2015-11-25 07:49:25 by monisetup.php
# @desc Default config file
#
$sitename='MercenarysWiki'; # site name
$data_dir= './data';
$upload_dir= 'pds';

$text_dir= $data_dir.'/text';
$cache_dir= $data_dir.'/cache';
$intermap= $data_dir.'/intermap.txt';
$editlog_name= $data_dir.'/editlog';
$shared_metadb= $data_dir."/metadb";
$shared_intermap= $data_dir."/text/InterMap";

$url_prefix="/mercenarys";
$imgs_dir= $url_prefix.'/imgs';
$logo_img= $imgs_dir.'/moniwiki-logo.png';
$query_prefix="/";

$css_url= $url_prefix.'/css/nlog.css';
$kbd_script= $url_prefix.'/css/kbd.js';
$logo_string= '<img src="'.$logo_img.'" alt="" border="0" align="middle" />';
$use_smileys= 1;
#$smiley='wikismiley'; # you can also use SmileyMap too.
$use_counter= 0; # counter
$use_fakemtime=0; # dir mtime emulation for FAT filesytem.
$use_hashed_upload_dir=0; # use hashed upload dir to upload files into many subdirs
$use_hostname= 1; # use hostname or ip address
$use_htmlcolor=0; # use html color scheme
$use_group=1; # use group namespace
$mask_hostname=1; # hide some part of hostnames or ip addresses
$show_hosts=1;
$edit_rows=16; # editer rows
#$editform=$data_dir.'/editform.txt'; # custom edit form
$iconset= 'moni2'; # moni, moni2
$inline_latex=0; # 0/1(on/off), mimetex, itex, etc.
#$inline_latex='mimetex';
#$mimetex_path='/cgi-bin/mimetex.cgi'; # cgi mode
#$mimetex_path='shell:mimetex'; # command line mode
#$mimetex_path='shell:/usr/bin/mimetex';
#$inline_latex='latex';
#$inline_latex='itex'; # use alternative inline latex (experimental)
#$inline_latex='1'; # use inline latex (default)
#$latex_convert_options='-crop 0x0 -density 120x120'; # change convert options for the latex processor
#$latex_renumbering=1; # renumbering tex equations
#$latex_allinone=1; # experimental feature. make a temporary latex file into all in one text.
$lang='auto'; # check language automatically.
$charset='utf-8'; # default character set. euc-kr etc.
$auto_linebreak= 1; # NoSmoke style insert <br> automatically.
$trail= 1; # use trailer (navagation list of some recently visited pages)
#$origin=1; # show upper pages like as Language/Script/Perl => Language > Script > Perl
#$arrow=' <img src="/wiki/imgs/moni-arrow.gif"/> ';
$notify= 0; # enable email notification
#$use_sendmail=0; # use sendmail
#$sendmail_path='/usr/sbin/sendmail -i -t -fnoreply'; # sendmail binary path
#$replyto="your@email.address"; # replyto return email address
#$anonymous_friendly=1; # make anonymous friendly wiki
$use_referer= 0; # use some basic referer feature.
$use_sistersites=1; # use sistersites/siterwiki feature.
#$use_singlebracket=1; #
$use_twinpages=1;
$use_trackback=0;
$vim_options='+"set expandtab" +"retab"'; # expand tabs in the Vim 6.x
#$vim_options='+"set expandtab" +"retab" +"let g:html_use_css=0"'; # with vim7.1 but hang... why ? :(
#$vim_options='+"set encoding=UTF-8"'; # for UTF-8 wikis
$pds_allowed="png|jpg|jpeg|gif|mp3|zip|tgz|gz|txt|css|exe|hwp|pdf|flv"; # some allowed file extension to upload.
$nonexists='forcelink';
#$nonexists='nolink'; # do not link non exists pages
#$nonexists='forcelink'; # link always
#$use_titlecache=0;
#$use_titlemenu=1; # use current title name as menu
#$security_class="needtologin";
#$security_class="desktop";
#$security_class="wikimaster";
#$security_class="community";
#$wikimasters=array('CsKim','SjPark');
#$owners=array('moniwiki','Hong');

$menu=array('FrontPage'=>1,'FindPage'=>4,'TitleIndex'=>3,'RecentChanges'=>2,'UserPreferences'=>'');
#$menu=array('MoniWiki'=>1,'FindPage'=>4,'TitleIndex'=>3,'BlogChanges'=>'','RecentChanges'=>2,'http://kldp.org KLDP'=>9);
#$menu_sep='|'; # obsolute
#$menu_bra=''; # obsolute
#$menu_cat=''; # obsolut
#$path='/usr/local/bin:/usr/bin:/bin:/usr/X11R6/bin'; # for unixes
#$path='./bin;c:/windows/command;c:/Program Files/gnuplot;c:/Program Files/vim/vim71'; # for win32
#$path='./bin;C:/Program Files/MiKTeX 2.5/miktex/bin;C:/Program Files/ImageMagick-6.3.6-Q16'; # for MikTeX
# ./bin to use user installed bins.
$theme='paper'; # set the theme
$theme_css=0; # change css of theme or not
#$mobile_theme='default'; # set the theme of mobile
$hr=''; # obsolute
#$title_rule='((?<=[a-z0-9])[A-Z][a-z0-9])'; #
#$blog_comments=1; # show all comments of a blog entry

#$date_fmt='Y-m-d';
#$date_fmt_rc='Y-m-d';
#$date_fmt_blog='Y-m-d';

#$sistermap=$data_dir.'/sistermap.txt';
$metatags=<<<META
<meta name='viewport' content='width=device-width' />
<meta name="robots" content="noindex,nofollow" />
<link rel="Start" href="FrontPage" />
<link rel="Index" href="TitleIndex" />
<link rel="Help" href="HelpOnFormatting" />
<link rel="Copyright" href="FrontPage" />
<link rel="Search" href="FindPage" />
<link rel="Glossary" href="WordIndex" />
<link rel="Alternate History" title="Page History" href="?action=info" />
<link rel="Alternate" title="xml" type="application/rss+xml" href="?action=rss_rc" />
<link rel="Alternate" title="Wiki Markup" type="text/plain" href="?action=raw" />
META;

$metatags_extra="<meta name='viewport' content='width=device-width' />";

# set global javascripts (lowlevel)
#$js=<<<EOF
#<script type="text/javascript" src="$url_prefix/local/ajax.js"></script>
#<script type="text/javascript" src="$url_prefix/local/se.js"></script>
#<script type="text/javascript" src="$url_prefix/local/Wikiwyg/lib/Wikiwyg.js"></script>
#<script type="text/javascript" src="$url_prefix/local/Wikiwyg/lib/Wikiwyg/Util.js"></script>
#<script type="text/javascript" src="$url_prefix/local/Wikiwyg/lib/Wikiwyg/Toolbar.js"></script>
#<script type="text/javascript" src="$url_prefix/local/Wikiwyg/lib/Wikiwyg/Wikitext.js"></script>
#<script type="text/javascript" src="$url_prefix/local/Wikiwyg/lib/Wikiwyg/Preview.js"></script>
#<script type="text/javascript" src="$url_prefix/local/Wikiwyg/lib/Wikiwyg/HTML.js"></script>
#<script type="text/javascript" src="$url_prefix/local/Wikiwyg/lib/Wikiwyg/Wysiwyg.js"></script>
#<script type="text/javascript" src="$url_prefix/local/moniwyg.js"></script>
#
#<script type="text/javascript" src="$url_prefix/local/js/prototype.js"></script>
#<script type="text/javascript" src="$url_prefix/local/js/scriptaculous.js?load=effects,controls"></script>
#<script type="text/javascript" src="$url_prefix/local/lightbox2/js/lightbox.js"></script>
#<link rel="stylesheet" href="$url_prefix/local/lightbox2/css/lightbox.css" type="text/css" media="screen" />
#<script type="text/javascript" src="$url_prefix/local/autocomplete.js"></script>
#<script type="text/javascript" src="$url_prefix/local/subindex.js"></script>
#EOF;
# alternatively you can use the $javascripts option (more inteligent method)
$javascripts=array(
	'js/i18n.js',
	'pasta.js',
	'ajax.js',
	'ASCIIMathML.js');

#$diffonly=1; # show only diff infos (do not show wiki contents)
#$goto_type=1;

#$purple_icon=''; # obsolute
#$use_purple=''; # obsolute
$perma_icon='??';
#$perma_icon='<img src="/wiki/imgs/egg.png" border="0" />';
#$pagetype=array("KldpDsl"=>"plain","ManPage"=>"/man","DocbookSgml"=>"/jade","LinuxDoc"=>"/linuxdoc");
# set default processor for jade
#$default_dsssl='to_dir/kldp.dsl#html';
#$docbook_xmldcl='to_dir/xml.dcl'; # utf-8 support for jade

#$password_length=6;
#$use_convert_thumbs=0; # for GalleryMacro

$myprocessors=array('syntax'=>'vim','sh'=>'vim','csh'=>'vim',
	'c'=>'vim','cpp'=>'vim','perl'=>'vim','lisp'=>'vim',
	'asm'=>'vim','masm'=>'vim','make'=>'vim',
	'java'=>'vim','ruby'=>'vim','haskell'=>'vim',
	'awk'=>'vim','nosyntax'=>'vim','make'=>'vim',
	'jade'=>false, 'linuxdoc'=>false, 'gnuplot'=>false, 'octave'=>false,
	'latex'=>false,
);
#$myprocessors=array('latex'=>'mimetex');
$myplugins=array('rcsexport'=>false); # substitute action/macro
#$myplugins=array('TOC'=>'TableOfContents'); # alias action/macro
#$myplugins=array('swfupload'=>false); # disable some macro
#$myplugins=array('rcsexport'=>false); # disable rcsexport
#
#$extra_macros=array('FootNote', 'Comment'); # call some extra macros after send_page()

#$url_schemas='mms';
#$blacklist='127.0.0.0/24:192.168.1.0/24:192.168.1.67'; # block ip
#$whitelist='127.0.0.0/24:192.168.0'; # always allowed network
#$kiwirian=array('Kiwirian','Hello'); # block users
#$kiwirian='Kiwirian:Hello';
#$delete_history=1;
#$use_twikilink=1;
#$timezone='KST'; // for windows
#$version_class='RcsLite';
#$rcs_check_broken=1; // check rcs file is broken or not
#$rcs_always_unlock=0; // always unlock rcs files to fix $rcs_user problem
#$use_numbering=1; // for the vim processor
#$vim_nocheck=0; // do not check vim syntax.
#$vim_nocheck=1;
$use_resizer=2; # 1:javascript resizer, 2: drupal style resizer
#$use_minoredit=1; // only for wiki owners
$auto_search='AutoGoto'; # FixMoin: for old moinmoin users, AutoGoto: default.
#$hr_type='fancy';
$use_wikiwyg=0; # 1 for GUI button/ 2 to set as default behavior/ 3 to set always use GUI.
#$wikiwyg_confirm=1; # always confirm
$use_sectionedit=1;
#$sectionedit_attr=1; # enable wikiwyg section editing
$spam_filter='antispam';
$toc_options='simple,toggle';
#$toc_options='title=Contents,toggle,simple';
#$use_ticket=1; # use ticket image to block spam bots.
#$use_captcha=1; # a alias of the $use_ticket
#$ticket_gdfont=5; # use a builtin gd bitmap font
#$gdfontpath='./data';
#$ticket_font='TTFONT';
#$ticket_font='PeignotNum';
#$ticket_font_size='20';
$local_abbr='LocalDictionary';
#$postfilters='abbr'; # abbr: abbrevation filter.
$use_forcemerge=1;
$default_language='ko';
$use_alias=1;
$aliaspage=$data_dir.'/text/AliasPageNames';
$use_easyalias=1; # direct linking to the dest page
$css_friendly=1;
#$css_friendly=1; # for more CSS friendly support
$use_redirect_msg=0;
#$use_redirect_msg=1; # for MoinMoin compatible
#$redirect_urls='moniwiki|google'; # protect #redirect URL method
#$use_safelogin=0;
$url_mappings=array('http://faq.ktug.or.kr/mywiki'=>'http://faq.ktug.or.kr/faq');
$shared_url_mappings='';
#$shared_url_mappings=$data_dir.'/text/UrlMap'; # enable builtin fix url
$trtags=array("{{|\n"=>"{{{#!wiki .closure\n",'{{|'=>"{{{#!wiki .closure\n", '|}}'=>'}}}'); # translate old wiki markups
#$external_target='_blank'; # always open new windows with external URLs

#$use_category=0; # on/off categories list in the edit mode
#$use_textbrowsers=1; # check some textbased browsers
$use_preview_uploads=1;
#$use_camelcase=0; # turn off camelcase syntax by default
$mediawiki_style=1; # 0: wikiCreole style [[foo bar]]=>[[FooBar]], 1: mediawiki style preserve white spaces
#$category_regex=urldecode('%EB%B6%84%EB%A5%98$'); # a category example for Korean
$use_backlinks=1; # set default fullsearch behavior as backlinks search
$use_backlink_search=1; # use backlink searching
$fullsearch_tooshort=2; #
#$use_smartdiff=1; # use the experimental smart diff XXX
#$hide_actions=0; # hide actions list for anonymous user
#$actions= array('DeletePage','LikePages','?action=Keywords Add keywords'); # customized act list
#$info_options='ago,simple'; # default Info macro options
#$info_actions=array('raw'=>'source');
#$info_actions=array('raw'=>'source','diff'=>'diff');
#$force_charset=1; # overriding default charset
#$use_titlemenu=1; # add the current pagename to the menu list
#$submenu='SubMenu'; # dynamic submenu
#$submenu_showmain=1;
#$shared_smileymap=$data_dir.'/text/SmileyMap'; # customizable smileymap
#$use_clipmacro=1; # use the clip macro with the attachment macro
$use_errlog=1;
#$errlog_maxline=20; # max lines to show
#$raw_errlog=0; # do not hide some dir. infos.
#$acl_type='default'; # XXX
#$acl_debug=1;
#$default_download_image='/block.jpg';
#$force_download=1;
#$download_action='download';
$use_resume_download=1;
#$control_read=1; # control read action also
#$use_macro_as_action=0; # XXX warn
#$isbn_img_download=1; # download isbn images to local cache dir.
#$use_clipmacro=1; # use clip applet with AttachmentMacro
#$no_register=1; # do not allow to register anymore
#$use_agreement=1; # show agreement form in UserPreference
#$agreement_page='data/agreement.txt';
#$no_wikihomepage=1; # do not use the wiki homepage for users
#$dot_fontsize=10; # dot font size for the VisualTour
#$dot_fontname='Eunjin'; # webdot font name for graphviz 2.2.x
#$dot_fontname='WEBDOTFONT'; # webdot fontname fot graphviz 1.8.x
#$dot_options="size \"6,6\"\n"; # extra webdot options
$preview_no_xss_protection=0; # enable X-XSS-Protection: 0
#$no_xss_filter=0; # do not filter XSS
$use_save_refresh=2;
#$use_savepage_hash=1; # use savepage hash to check valid action
$use_refresh=2;
#$savepage_timeout=10; # savepage timeout
$cachetime=60*60*24;
#$cachetime=60*60*5; # set cachetime for caching
#$use_conditional_get=1; # use conditional get for static pages
#$proxy_maxage=1; # maxage in seconds for shared caches
#$nosession=1; # do not use session
#$cookie_expires=60*60*24*30; // default 30 days
$dynamic_macros=array('pagecount'=>1, 'recentchanges'=>1,'userpreferences'=>1,
	'uploadedfiles'=>1,'SWFUpload'=>1,'Vote'=>1,
	'login'=>1,'minilogin'=>1,'scrap'=>1, 'subscribe'=>1, 'fortune'=>1);
$cache_public_dir='./_cache'; # enhanced caching
$cache_public_url=$url_prefix.'/_cache';
#$no_404=1; # for IIS
#$nofancy_404=1; # simplified 404 msg for robots etc.
#$toolbar_iconset='mediawiki'; # change the toolbar iconset
#$use_lightbox=1;
#$gallery_use_lightbox=1;
#$use_hangul_search=1; # use hangul search for auto-completer
#$use_subindex=1; # use subpage indices
#$default_pre='pre'; # set the default pre processor
#$default_markup='monimarkup'; # set the default markup processor
#$use_rating=1; # builtin Rating support
$use_jwmediaplayer=1;
$jwmediaplayer_prefix='http://www.jeroenwijering.com/embed';
$flashupload='swfupload';
#$icon_list='edit,diff,show,find,print,info,help,pref,rss'; # set the icon list
#$use_folding=0; # 1:default simple js / 2:with the prototype/mootools
#$use_openid=0; # enable openid login
#$check_openid_url=0; # selectivly show openid icons: experimental
#$use_autosave=1; # enable autosave feature.
#$delayindex=60*60*24*5 # delayed indexing
$robots='googlebot|yahoo'; # set robots; # set robots; # set robots; # set robots; # set robots; # set robots; # set robots; # set robots
$mobile_agents='android|iphone'; # mobile agents
#$fetch_imagefilesize=1; # fetch imagefile sizes for mobile wikis
#$security_class_robot='robot';
#$url_encodings='euc-kr,uhc'; # autogoto option: search invalid urls with different encodings
#$use_scrap=1; # use scrap
#$login_strict=0; # strict check
#$use_userlink=0; # replace the UserPreference link to the UserHomePage
$use_local_translation=0; # automatic translation
#$use_jsbuttons=0; # use javascript fake buttons.
#$use_namespace=0; # support dokuwiki like namespace
#$rc_strimwidth=20; # witdh param of mb_strimwidth() with the RecentChanges macro
#$titleindexer_class='PageIndex'; # user defined titleindexer class
#$pages_limit=5000; # maximum number of pages to retrieve by default to reduce server load.
#$default_delaytime= 60*60*24; # set the default delayed time for caching as 24 hours
#$use_avatar='identicon'; # set avatar imgs based on user IP address for anonymous users. default: identicon
#$titlesearch_noexact=0; # do not search exact page name and get all titlesearch results
#$titlesearch_exact_all=0; # get all exact matches
#$titlesearch_noredirect=0; # do not redirect to the only one founded page except exact match.
#$use_similar_text=0; # use similar_text() function (in likepages action)
#$cachetime=60*60*24;
$robots='googlebot|yahoo';
$seed="3dsAWSNtXUxfWE4qQk8vvL953GWkdYe37cyo2mCgObKdC61z2kk5UMAK4CaXBlPo";
$rcs_user="root";
$admin_passwd='40nB75oeSznbM';
