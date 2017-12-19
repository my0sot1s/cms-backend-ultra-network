-- MySQL Script generated by MySQL Workbench
-- Thu Sep 21 22:43:29 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mysqlnode
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mysqlnode
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mynode` DEFAULT CHARACTER SET utf8mb4 ;
USE `mynode` ;

-- -----------------------------------------------------
-- Table `mynode`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mynode`.`User` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `password` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `email` VARCHAR(50) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `dateCreated` DATETIME NULL DEFAULT NULL,
  `status` TINYINT(4) NULL DEFAULT '1',
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `mynode`.`Post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mynode`.`Post` (
  `post_id` INT(11) NOT NULL,
  `user_post` INT(11) NULL DEFAULT NULL,
  `caption` TEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `media` TEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `dateCreate` DATETIME NULL DEFAULT NULL,
  `status` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  INDEX `fk_Post_User_idx` (`user_post` ASC),
  CONSTRAINT `fk_Post_User`
    FOREIGN KEY (`user_post`)
    REFERENCES `mynode`.`User` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `mynode`.`Comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mynode`.`Comment` (
  `comment_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_comment` INT(11) NULL,
  `post_id` INT(11) NULL DEFAULT NULL,
  `content` TEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `media` TEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `hashtag` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `status` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  INDEX `fk_Comment_Post1_idx` (`post_id` ASC),
  INDEX `fk_Comment_User1_idx` (`user_comment` ASC),
  CONSTRAINT `fk_Comment_Post1`
    FOREIGN KEY (`post_id`)
    REFERENCES `mynode`.`Post` (`post_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comment_User1`
    FOREIGN KEY (`user_comment`)
    REFERENCES `mynode`.`User` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `mynode`.`SubComment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mynode`.`SubComment` (
  `sub_id` INT(11) NOT NULL,
  `comment_id` INT(11) NULL DEFAULT NULL,
  `user_comment` INT(11) NULL DEFAULT NULL,
  `sub_content` TEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `sub_media` TEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `dateCreate` DATETIME NULL DEFAULT NULL,
  `status` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`sub_id`),
  INDEX `fk_SubComment_Comment1_idx` (`comment_id` ASC),
  INDEX `fk_SubComment_User1_idx` (`user_comment` ASC),
  CONSTRAINT `fk_SubComment_Comment1`
    FOREIGN KEY (`comment_id`)
    REFERENCES `mynode`.`Comment` (`comment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SubComment_User1`
    FOREIGN KEY (`user_comment`)
    REFERENCES `mynode`.`User` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

USE `mynode` ;

-- -----------------------------------------------------
--  routine1
-- -----------------------------------------------------

DELIMITER $$
USE `mynode`$$
$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
