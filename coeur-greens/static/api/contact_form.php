<?php
/**
 * Created by PhpStorm.
 * User: Herbert Nenninger
 * Date: 3/3/17
 * Time: 6:42 AM
 */
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {

      //Email information
      $admin_email = "alex@notwithoutus.com";
      $email = $_REQUEST['email'];
      $subject = "Contact Email";
      $comment = $_REQUEST['message'];

      //send email
      mail($admin_email, "$subject", $comment, "From:" . $email);

      //Email response
      echo "Thank you for contacting us!";
  }
