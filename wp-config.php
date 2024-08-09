<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '-hu)?6|z4:BB%w^yi(bq*[H+5|s=KS,/7^~aB <[p%%e&.$6zB|.r!gGpLR1oj4&' );
define( 'SECURE_AUTH_KEY',   ',tE<$C?iD5.|GSFd9=70EmrR8?ao4dP~=J1mAruBKQZL_5dvr],.6ps*6Q}K&{G<' );
define( 'LOGGED_IN_KEY',     'Q//U[&flu*Jv/6{<0;Y`GVJ:*iyz-!MS_(UY) %i4@~|}Iu:dv3]VGVfcfPqL,0J' );
define( 'NONCE_KEY',         'uPx_a&NvK@{U>!E~Tb~m4AAjuBx}E/;ghEl>rK*:/wMvAz54_@CfLY8bxg?vc5eS' );
define( 'AUTH_SALT',         'LgrVlYgb2J|D(,oq8C+{8.kP]oFuWa~gHZ&kPyn^z.}er n-aSKZ@Nd_L>L2aBmA' );
define( 'SECURE_AUTH_SALT',  '{Tk5us,ILa1{l#7V_LMN7o/=H-Q@}`]}q@RL6K!T;;Q>uHlsE%Y+&E1C`uVFU`cg' );
define( 'LOGGED_IN_SALT',    '+N|N31sQ,7ZuZ_<`*>5AG, /ndUA5,gsnqOG/8P_1dc=u41t,x)KM~?&=}g@xzCa' );
define( 'NONCE_SALT',        '#YCSe!otoXn-haPjjmX8z(~%:l1*k[-rD9%y@+ll}:Fq%LH|eMJx[X&mCB^tCXvm' );
define( 'WP_CACHE_KEY_SALT', 'pp?N@[iM_Z):xOQ!N}cA-/kjk_O)u({1/3lsk=-IeTPO;$oHzAKf1*sZT%>pKT@U' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
