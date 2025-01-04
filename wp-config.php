<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'ngo' );

/** Database password */
define( 'DB_PASSWORD', 'ngo' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'votN@0k,>NCe`4s>|84z4}5>6}`=0hV-!2`UG2u8>>?1-8T]RKl2cn%CWYK0Lw4#' );
define( 'SECURE_AUTH_KEY',  'Du-E&whB7h0*sxr!CD3,K{?G%G(;>1%1[,:?s!GiE d~<$`@Raci<A1 7Nu<(#IV' );
define( 'LOGGED_IN_KEY',    'hdG: }%.CG}tx*wz-OGVzsIFKxz%~:p0?P<b/vi)M((2:<BB?3e+e|>JjogD} ^`' );
define( 'NONCE_KEY',        '4!5~%TBqzTol-Yi90|$C$t/yVZ(*.e@DL]Z@>UJWF?K$5lm*vgYz!mgVzE:=$L8`' );
define( 'AUTH_SALT',        '-K0$=C4}?H9~lL%VtSZ]dA4YgU8`by!bsc&It_#vUO78x%;Y.?:=~#me8wG3-;=7' );
define( 'SECURE_AUTH_SALT', '^QTRD3M<~$T]?nl_igF~IKwnBqVz#/Hqh*)3P) H*iPmU-+arZvn`P{v }u%<dIV' );
define( 'LOGGED_IN_SALT',   'F4}jIP@g`(1(fKR`*R[s!Af4!Rx{E8J)$|B0]<Eo6F@Vb {=O}{)m/9|l7;Llga%' );
define( 'NONCE_SALT',       ':mY^w_;zcpD(&^7`]Ie_ qD)!Cb[o95vQjGpEGa4TbA-iG~G:wsxZHA,?#F_%^Y=' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'SURECART_ENCRYPTION_KEY', 'hdG: }%.CG}tx*wz-OGVzsIFKxz%~:p0?P<b/vi)M((2:<BB?3e+e|>JjogD} ^`' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
